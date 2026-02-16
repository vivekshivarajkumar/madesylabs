
import React from 'react';

export const CodeEditor: React.FC = () => {
  const codeLines = [
    { type: 'keyword', content: 'class', content2: ' UI_Interface', content3: ':', complex: true },
    { type: 'comment', content: '    """Design system protocol handler"""', indent: 0 },
    { type: 'spacer' },
    { type: 'method', content: '    def', content2: ' __init__', content3: '(self, theme="void"):', complex: true },
    { type: 'text', content: '        self.palette = COLORS[theme]', indent: 0 },
    { type: 'text', content: '        self.font = "Space Grotesk"', indent: 0 },
    { type: 'spacer' },
    { type: 'method', content: '    def', content2: ' inject_styles', content3: '(self):', complex: true },
    { type: 'keyword', content: '        return', content2: ' f"font-family: {self.font};"', complex: true },
    { type: 'spacer' },
    { type: 'comment', content: '# Initializing Interface Protocol', indent: 0 },
    { type: 'text', content: 'ui = UI_Interface(theme="void")', indent: 0 },
    { type: 'text', content: 'print(ui.inject_styles())', indent: 0 },
  ];

  return (
    <div className="flex flex-col border border-white/10 rounded-sm overflow-hidden bg-void shadow-2xl h-[450px]">
      <div className="flex items-center justify-between px-6 py-4 bg-void border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-xl">terminal</span>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em]">
            <span className="text-white/20 uppercase">SYSTEM</span>
            <span className="text-white/20">/</span>
            <span className="text-white/20 uppercase">PROTOCOLS</span>
            <span className="text-white/20">/</span>
            <span className="text-white uppercase">INTERFACE.PY</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-void rounded-sm hover:brightness-110 transition-all font-black text-[10px] uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">play_arrow</span>
            EXECUTE
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-8 font-mono text-[13px] leading-relaxed overflow-y-auto bg-black/20">
          {codeLines.map((line: any, idx) => (
            <div key={idx} className="flex group">
              <div className="w-10 text-white/10 select-none text-right pr-4 text-[10px] font-mono">{idx + 1}</div>
              <div className="flex-1 whitespace-pre">
                {line.type === 'spacer' && <br />}
                {line.type === 'comment' && <span className="text-primary/30 italic">{line.content}</span>}
                {line.complex && (
                  <>
                    {line.type === 'keyword' && (
                      <>
                        <span className="text-secondary">{line.content}</span>
                        <span className="text-white/80">{line.content2}</span>
                        <span className="text-secondary">{line.content3}</span>
                      </>
                    )}
                    {line.type === 'method' && (
                      <>
                        <span className="text-secondary italic">{line.content}</span>
                        <span className="text-primary font-bold">{line.content2}</span>
                        <span className="text-white/40">{line.content3}</span>
                      </>
                    )}
                  </>
                )}
                {!line.complex && line.type === 'text' && <span className="text-white/70">{line.content}</span>}
              </div>
            </div>
          ))}
          <div className="flex mt-2">
            <div className="w-10"></div>
            <div className="w-[2px] h-4 bg-primary animate-pulse ml-0"></div>
          </div>
        </div>
      </div>

      <div className="px-6 py-2 bg-void border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/20">
        <div className="flex gap-4">
          <span>LF</span>
          <span>UTF-8</span>
          <span>PY 3.x</span>
        </div>
        <div className="flex gap-4 uppercase tracking-widest">
          <span className="text-primary/40">READY</span>
        </div>
      </div>
    </div>
  );
};
