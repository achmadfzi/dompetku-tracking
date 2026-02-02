import React from 'react';

export default function UseCases() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-y border-border-color">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10 dark:opacity-10" style={{ backgroundImage: "radial-gradient(#25d466 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-12">Kata Mereka yang Sudah Coba</h2>

                <div className="bg-[#1f2c34] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white font-bold px-4 py-1 rounded-full text-sm">
                        Freelancer Story
                    </span>

                    {/* Quote Icon */}
                    <span className="material-symbols-outlined text-6xl text-white/10 absolute top-8 left-8">format_quote</span>

                    <div className="relative z-10 flex flex-col gap-6">
                        {/* Chat Bubble 1 */}
                        <div className="self-start bg-[#202c33] p-4 rounded-xl rounded-tl-none max-w-lg text-left shadow-lg">
                            <p className="text-gray-300 italic text-lg">
                                "Dulu sering lupa catat pengeluaran karena aplikasinya ribet dibuka. Dengan Bot ini, sebelum bayar kasir pun udah selesai dicatat! Hemat waktu banget."
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <div className="w-8 h-8 rounded-full bg-gray-500 bg-cover" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=32')" }}></div>
                                <div className="text-sm">
                                    <p className="text-white font-bold">Rina S.</p>
                                    <p className="text-gray-500 text-xs">Graphic Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Bubble 2 (Reply) */}
                        <div className="self-end bg-[#005c4b] p-4 rounded-xl rounded-tr-none max-w-md text-left shadow-lg translate-y-4">
                            <p className="text-white text-base">
                                ✅ Tepat! Kamu udah hemat waktu ~2 jam/minggu untuk urusan catat keuangan. Keep it up! 💪
                            </p>
                            <div className="flex justify-end mt-1">
                                <span className="text-[10px] text-white/70">Bot Analysis</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                    <button className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-foreground">chevron_left</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20"></span>
                        <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20"></span>
                    </div>
                    <button className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-foreground">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
