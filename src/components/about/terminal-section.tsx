import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

export function TerminalSection() {
    const [lines, setLines] = useState<string[]>([
        "Connecting to mainframe...",
        "Access granted.",
        "Welcome to ENTHUSIA_OS [v5.0.1]",
        "Type 'HELP' for available commands."
    ]);
    const [input, setInput] = useState("");
    const consoleRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const newLines = [...lines, `> ${cmd}`];

        switch (cmd.toUpperCase().trim()) {
            case "HELP":
                newLines.push("Available commands:", "  - EVENTS: List all event categories", "  - SECRET: Decrypt hidden message", "  - DATE: Show fest date", "  - CLEAR: Clear terminal");
                break;
            case "EVENTS":
                newLines.push("Fetching data...", "[1] TECHNICAL", "[2] CULTURAL", "[3] SPORTS", "[4] E-SPORTS");
                break;
            case "SECRET":
                newLines.push("Decrypting...", "...", "ACCESS GRANTED: 'PARALLEL_50' - Use this code for 0% off (It's free entry!)");
                break;
            case "DATE":
                newLines.push("Target Date: FEB 12 - 14, 2026");
                break;
            case "CLEAR":
                setLines(["Terminal cleared."]);
                setInput("");
                return;
            // Event Sub-commands
            case "1":
            case "TECHNICAL":
                newLines.push(">> TECHNICAL EVENTS:", "  - SITNovate 2.0", "  - Codesprint", "  - Strangertech", "  - Sitank 2.0", "  - Buildbrand");
                break;
            case "2":
            case "CULTURAL":
                newLines.push(">> CULTURAL EVENTS:", "  - Dance Battle", "  - Drama Competition", "  - Ramp Walk", "  - Music Fest", "  - Stand-Up Comedy");
                break;
            case "3":
            case "SPORTS":
                newLines.push(">> SPORTS EVENTS:", "  - FOOTBALL_5V5", "  - BASKETBALL", "  - CRICKET_BOX", "  - CHESS_BLITZ");
                break;
            case "4":
            case "E-SPORTS":
            case "ESPORTS":
                newLines.push(">> E-SPORTS EVENTS:", "  - VALORANT", "  - BGMI");
                break;
            case "WHOAMI":
                newLines.push("USER: GUEST_ACCESS", "ROLE: VISITOR_5.0");
                break;
            default:
                newLines.push(`Command not found: ${cmd}`);
        }

        setLines(newLines);
        setInput("");
    };

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="w-full py-24 bg-black border-t border-white/10 flex justify-center px-4 relative z-10">
            <div className="w-full max-w-3xl bg-black border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)] font-mono text-sm md:text-base relative z-10">
                {/* Header */}
                <div className="bg-green-900/10 border-b border-green-500/20 p-2 px-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-green-500" />
                    <span className="text-green-500/80">root@enthusia:~</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                </div>

                {/* Console */}
                <div ref={consoleRef} className="p-4 md:p-6 min-h-[300px] max-h-[500px] overflow-y-auto text-green-500/90 space-y-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-green-900/10 [&::-webkit-scrollbar-thumb]:bg-green-500/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-green-500/50">
                    {lines.map((line, i) => (
                        <div key={i} className="break-words">{line}</div>
                    ))}

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-green-600">{">"}</span>
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
                            className="flex-1"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-green-400 w-full focus:ring-0 placeholder:text-green-800"
                                placeholder="Enter command..."
                                autoFocus
                            />
                        </form>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="p-2 border-t border-green-500/20 bg-green-900/5 flex gap-2 overflow-x-auto">
                    {["HELP", "EVENTS", "DATE", "SECRET"].map(cmd => (
                        <button
                            key={cmd}
                            onClick={() => handleCommand(cmd)}
                            type="button"
                            className="px-3 py-1 border border-green-500/30 rounded text-xs text-green-400 hover:bg-green-500/10 transition-colors whitespace-nowrap cursor-pointer relative z-20 active:scale-95"
                        >
                            {cmd}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
