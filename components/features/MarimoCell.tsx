
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface MarimoCellProps {
  code: string[];
  output?: string;
  cellId?: string;
}

export const MarimoCell: React.FC<MarimoCellProps> = ({ code, output: initialOutput, cellId = "0x42" }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [executionResult, setExecutionResult] = useState<string>(initialOutput || '');

  const highlightPython = (line: string) => {
    const tokens = line.split(/(\s+|\(|\)|:|"|'|,)/);
    return tokens.map((token, idx) => {
      if (['class', 'def', 'return', 'import', 'from', 'as', 'if', 'else', 'elif', 'for', 'while'].includes(token.trim())) {
        return <span key={idx} className="text-secondary italic">{token}</span>;
      }
      if (token.trim() === 'self') {
        return <span key={idx} className="text-orange-400/80">{token}</span>;
      }
      if (/^".*"$/.test(token) || /^'.*'$/.test(token)) {
        return <span key={idx} className="text-primary/60 italic">{token}</span>;
      }
      if (/^[A-Z_][A-Z0-9_]*$/.test(token.trim()) && token.trim().length > 2) {
        return <span key={idx} className="text-blue-400">{token}</span>;
      }
      if (token.includes('(')) {
        const parts = token.split('(');
        return (
          <span key={idx}>
            <span className="text-primary font-bold">{parts[0]}</span>
            <span className="text-white/40">(</span>
          </span>
        );
      }
      return <span key={idx} className="text-white/80">{token}</span>;
    });
  };

  const handleRun = async () => {
    setIsRunning(true);
    setShowOutput(false);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const fullCode = code.join('\n');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a Python interpreter in a futuristic design system. 
        Execute this code and provide the exact stdout or return value that would appear in a terminal. 
        Keep it concise and technical. 
        Code:
        ${fullCode}`,
        config: {
          temperature: 0.1,
        }
      });

      setExecutionResult(response.text || 'Process completed with exit code 0');
      setShowOutput(true);
    } catch (error) {
      console.error('Execution failed:', error);
      setExecutionResult('Error: Runtime connection interrupted');
      setShowOutput(true);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="group relative flex flex-col w-full bg-[#0a0a0f] border border-white/5 rounded-md overflow-hidden transition-all hover:border-primary/30 shadow-2xl">
      <div className={`absolute left-0 top-0 bottom-0 w-[4px] transition-colors ${isRunning ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary/30'}`}>
        {isRunning && <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-bounce"></div>}
      </div>

      <div className="flex flex-col pl-6">
        <div className="flex items-center justify-between py-2 pr-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest">Cell [{cellId}]</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className={`flex items-center gap-2 px-3 py-1 rounded-sm transition-all text-[10px] font-black uppercase tracking-widest ${
                isRunning 
                ? 'bg-white/5 text-white/20 cursor-wait' 
                : 'bg-primary/10 text-primary hover:bg-primary hover:text-void'
              }`}
            >
              <span className="material-symbols-outlined text-sm leading-none">
                {isRunning ? 'progress_activity' : 'play_arrow'}
              </span>
              {isRunning ? 'Processing...' : 'Run Code'}
            </button>
          </div>
        </div>

        <div className="py-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
          {code.map((line, i) => (
            <div key={i} className="flex group/line">
              <span className="inline-block w-8 text-white/10 text-right pr-4 select-none italic">{i + 1}</span>
              <span className="whitespace-pre">{highlightPython(line)}</span>
            </div>
          ))}
        </div>

        {showOutput && (
          <div className="border-t border-white/5 bg-black/40 p-5 font-mono animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-3">
               <p className="text-[9px] text-white/20 uppercase font-black tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">output</span>
                STDOUT_RESULT
              </p>
            </div>
            <div className="text-primary/90 text-[12px] leading-snug bg-void/50 p-4 border-l-2 border-primary/40 rounded-sm font-mono whitespace-pre-wrap">
              {executionResult}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
