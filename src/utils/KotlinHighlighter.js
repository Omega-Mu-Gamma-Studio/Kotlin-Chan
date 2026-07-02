/**
 * KotlinHighlighter.js
 *
 * Zero-dependency Kotlin tokenizer for Kotlin-chan.
 * Returns an HTML string with <span class="token-*"> wrappers.
 * Used by CodeBlock.jsx.
 *
 * Token classes:
 *   token-keyword     → blue   (if, for, class, fun, return, etc.)
 *   token-type        → teal   (Int, String, Boolean, List, etc.)
 *   token-string      → green  (quoted strings, raw strings, char literals)
 *   token-template    → cyan   (string template interpolation: $name, ${expr})
 *   token-comment     → gray   (// and block comments)
 *   token-number      → orange (integers, floats, hex, binary, suffixes)
 *   token-method      → pink   (identifier immediately followed by '(')
 *   token-annotation  → purple (@Composable, @JvmStatic, etc.)
 *   token-class-name  → yellow (PascalCase identifiers)
 *   token-operator     → red    (::, ->, ?:, ?., .., ==, etc.)
 */

// --- Kotlin hard keywords + commonly used soft/modifier keywords ---
const KEYWORDS = new Set([
  // Hard keywords
  'as','break','class','continue','do','else','false','for','fun',
  'if','in','interface','is','null','object','package','return',
  'super','this','throw','true','try','catch','finally','typealias',
  'typeof','val','var','when','while',
  // Modifier / soft keywords
  'by','constructor','delegate','dynamic','field','file','get','import',
  'init','param','property','receiver','set','setparam','where',
  'actual','abstract','annotation','companion','const','crossinline',
  'data','enum','expect','external','final','infix','inline','inner',
  'internal','lateinit','noinline','open','operator','out','override',
  'private','protected','public','reified','sealed','suspend','tailrec',
  'vararg','value',
]);

// --- Kotlin built-in / stdlib types ---
const TYPES = new Set([
  // Primitives / basics
  'Int','Long','Short','Byte','Float','Double','Boolean','Char','String',
  'Unit','Any','Nothing','Number','Comparable',
  // Unsigned
  'UInt','ULong','UShort','UByte',
  // Arrays & collections
  'Array','IntArray','LongArray','FloatArray','DoubleArray','BooleanArray',
  'CharArray','ShortArray','ByteArray',
  'List','MutableList','ArrayList','Set','MutableSet','HashSet',
  'Map','MutableMap','HashMap','LinkedHashMap',
  'Pair','Triple','Sequence','Collection','Iterable','Iterator',
  // Coroutines / common Android + Kotlin stdlib
  'Flow','MutableStateFlow','StateFlow','LiveData','MutableLiveData',
  'Deferred','Job','CoroutineScope','CoroutineContext',
  'Result','Lazy','Regex','StringBuilder',
]);

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Tokenizes the *inside* of a string literal, highlighting $name and
// ${expr} template interpolation while keeping the rest as plain string.
function tokenizeStringBody(body) {
  let out = '';
  let i = 0;
  const len = body.length;

  while (i < len) {
    if (body[i] === '$' && body[i + 1] === '{') {
      let end = i + 2;
      let depth = 1;
      while (end < len && depth > 0) {
        if (body[end] === '{') depth++;
        else if (body[end] === '}') depth--;
        end++;
      }
      out += `<span class="token-template">${escapeHtml(body.slice(i, end))}</span>`;
      i = end;
      continue;
    }
    if (body[i] === '$' && /[a-zA-Z_]/.test(body[i + 1] || '')) {
      let end = i + 1;
      while (end < len && /[\w]/.test(body[end])) end++;
      out += `<span class="token-template">${escapeHtml(body.slice(i, end))}</span>`;
      i = end;
      continue;
    }
    out += escapeHtml(body[i]);
    i++;
  }

  return out;
}

export function tokenize(line) {
  let result = '';
  let i = 0;
  const len = line.length;

  while (i < len) {

    // ── Block comment opening /* (handle multiline state externally if needed) ──
    if (line[i] === '/' && line[i + 1] === '*') {
      let end = i + 2;
      while (end < len - 1 && !(line[end] === '*' && line[end + 1] === '/')) end++;
      end = Math.min(end + 2, len);
      result += `<span class="token-comment">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Single-line comment // ──
    if (line[i] === '/' && line[i + 1] === '/') {
      result += `<span class="token-comment">${escapeHtml(line.slice(i))}</span>`;
      break;
    }

    // ── Annotation @Something ──
    if (line[i] === '@' && /[a-zA-Z_]/.test(line[i + 1] || '')) {
      let end = i + 1;
      while (end < len && /[\w.]/.test(line[end])) end++;
      result += `<span class="token-annotation">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Raw / triple-quoted string """...""" ──
    if (line[i] === '"' && line[i + 1] === '"' && line[i + 2] === '"') {
      let end = i + 3;
      while (end < len && !(line[end] === '"' && line[end + 1] === '"' && line[end + 2] === '"')) end++;
      end = Math.min(end + 3, len);
      const body = line.slice(i + 3, Math.max(i + 3, end - 3));
      result += `<span class="token-string">"""${tokenizeStringBody(body)}"""</span>`;
      i = end;
      continue;
    }

    // ── String literal " (with $template interpolation) ──
    if (line[i] === '"') {
      let end = i + 1;
      while (end < len) {
        if (line[end] === '\\') { end += 2; continue; }
        if (line[end] === '"') { end++; break; }
        end++;
      }
      const closed = line[end - 1] === '"' && end - 1 > i;
      const bodyEnd = closed ? end - 1 : end;
      const body = line.slice(i + 1, bodyEnd);
      const quoteEnd = closed ? '"' : '';
      result += `<span class="token-string">"${tokenizeStringBody(body)}${quoteEnd}</span>`;
      i = end;
      continue;
    }

    // ── Char literal ' ──
    if (line[i] === "'") {
      let end = i + 1;
      while (end < len) {
        if (line[end] === '\\') { end += 2; continue; }
        if (line[end] === "'") { end++; break; }
        end++;
      }
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Number literal (int, float, hex 0x, binary 0b, suffixes) ──
    if (/[0-9]/.test(line[i]) && (i === 0 || !/[\w]/.test(line[i - 1]))) {
      let end = i;
      // hex
      if (line[i] === '0' && (line[i + 1] === 'x' || line[i + 1] === 'X')) {
        end += 2;
        while (end < len && /[0-9a-fA-F_]/.test(line[end])) end++;
      // binary
      } else if (line[i] === '0' && (line[i + 1] === 'b' || line[i + 1] === 'B')) {
        end += 2;
        while (end < len && /[01_]/.test(line[end])) end++;
      } else {
        while (end < len && /[0-9._eE]/.test(line[end])) end++;
      }
      // consume suffixes: f, F, L, u, U, uL etc.
      while (end < len && /[fFLuU]/.test(line[end])) end++;
      result += `<span class="token-number">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Word: keyword / type / method / identifier ──
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < len && /[\w]/.test(line[end])) end++;
      const word = line.slice(i, end);

      // Peek past whitespace to detect function/method call
      let j = end;
      while (j < len && line[j] === ' ') j++;
      const isCall = line[j] === '(';

      let cls = '';
      if (KEYWORDS.has(word))        cls = 'token-keyword';
      else if (TYPES.has(word))      cls = 'token-type';
      else if (isCall)               cls = 'token-method';
      else if (/^[A-Z]/.test(word)) cls = 'token-class-name';

      result += cls
        ? `<span class="${cls}">${escapeHtml(word)}</span>`
        : escapeHtml(word);

      i = end;
      continue;
    }

    // ── Multi-char operators: ::, ->, ?:, ?., .., ..<, ==, ===, etc. ──
    {
      const slice = line.slice(i);
      const match = slice.match(/^(::|->|\?:|\?\.|\.\.<|\.\.|===|!==|==|!=|&&|\|\||[+\-*/%&|^~!<>=]=?)/);
      if (match) {
        result += `<span class="token-operator">${escapeHtml(match[0])}</span>`;
        i += match[0].length;
        continue;
      }
    }

    // ── Everything else (punctuation, braces, semicolons) ──
    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}
