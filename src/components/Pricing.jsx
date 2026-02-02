import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
    return (
        <section className="py-24 bg-background relative" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                            Investasi Kecil, <span className="text-primary">Hemat Banyak</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-muted">Pilih paket yang sesuai dengan kebutuhan pencatatanmu.</p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <ScrollReveal delay={0.2} className="h-full">
                        <div className="bg-background-card border border-border-color rounded-3xl p-8 flex flex-col hover:border-black/20 dark:hover:border-white/20 transition-colors h-full shadow-lg shadow-black/5">
                            <div className="mb-6">
                                <h3 className="text-xl font-medium text-muted mb-2">FREE TRIAL</h3>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold text-foreground">Rp 0</span>
                                    <span className="text-muted mb-1">/bulan</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-muted/80">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Gratis 7 hari akses
                                </li>
                                <li className="flex items-center gap-3 text-muted/80">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Bisa hapus, update transaksi
                                </li>
                                <li className="flex items-center gap-3 text-muted/80">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Laporan Mingguan
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl border border-border-color text-foreground font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                Mulai Gratis
                            </button>
                        </div>
                    </ScrollReveal>

                    {/* Pro Plan */}
                    <ScrollReveal delay={0.4} className="h-full">
                        <div className="bg-background-card border-2 border-primary/50 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(37,212,102,0.1)] h-full">
                            <div className="absolute top-0 right-0 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-bl-xl">
                                POPULAR
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-medium text-primary mb-2">LIFETIME</h3>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold text-foreground">Rp 150.000</span>
                                    <span className="text-muted mb-1"></span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="font-bold">Unlimited Chat</span>
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Catat pakai chat, voice & foto
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Akses semua fitur tanpa kuota
                                </li>
                                <li className="flex items-center gap-3 text-foreground">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Akses Dashboard GoogleSheet
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                Upgrade Sekarang
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
