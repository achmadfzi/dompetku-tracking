import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="features">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 will-change-transform"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 will-change-transform"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Fitur Unggulan
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                            Semua yang Kamu Butuhkan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Dalam Satu Aplikasi Chat</span>
                        </h2>
                        <p className="text-muted text-lg">
                            Kelola keuangan jadi lebih mudah, cepat, dan menyenangkan tanpa perlu install aplikasi berat.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Row 1: Natural Language (8col) + Scan Struk (4col, tall) */}

                    {/* Feature 1: Natural Language */}
                    <ScrollReveal delay={0.05} className="md:col-span-8 bg-background-card border border-border-color rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors shadow-lg shadow-black/5">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-9xl text-primary">chat</span>
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-3xl">chat</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">Natural Language Input</h3>
                                <p className="text-muted text-lg leading-relaxed max-w-md">
                                    Cukup ketik seperti chat biasa. <br />
                                    <span className="text-foreground font-medium">"Makan siang 35rb"</span> atau <span className="text-foreground font-medium">"Isi bensin 200rb"</span>, AI kami yang urus sisanya.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 2: Scan Struk (tall card, spans 2 rows) */}
                    <ScrollReveal delay={0.1} className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-background-card to-background border border-border-color rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/50 transition-colors shadow-lg shadow-black/5">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-3xl">receipt_long</span>
                                </div>
                                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                                    AUTO SCAN
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-3">Scan Struk</h3>
                            <p className="text-muted leading-relaxed mb-8">
                                Malas ngetik? Foto saja struk belanjamu. AI akan mengekstrak tanggal, merchant, item, dan total harga secara otomatis.
                            </p>

                            {/* Receipt Visual */}
                            <div className="mt-auto relative mx-auto w-full max-w-[200px] bg-white text-gray-800 p-4 rounded-lg shadow-xl rotate-2 group-hover:rotate-0 transition-transform duration-500 font-mono text-xs border border-gray-200">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl opacity-20">storefront</span>
                                </div>
                                <div className="space-y-2 border-b border-dashed border-gray-300 pb-2 mb-2">
                                    <div className="flex justify-between"><span>Indomaret</span><span>12.00</span></div>
                                    <div className="flex justify-between"><span>Tgl</span><span>24/10</span></div>
                                </div>
                                <div className="space-y-1 mb-2">
                                    <div className="flex justify-between"><span>Roti</span><span>12.000</span></div>
                                    <div className="flex justify-between"><span>Kopi</span><span>18.000</span></div>
                                </div>
                                <div className="border-t border-gray-800 pt-2 flex justify-between font-bold">
                                    <span>TOTAL</span><span>30.000</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Row 2: Voice Note (4col) + Analytics (4col) — shares row with Scan Struk tall card */}

                    {/* Feature 3: Voice Note */}
                    <ScrollReveal delay={0.1} className="md:col-span-4 bg-background-card border border-border-color rounded-3xl p-8 group hover:border-purple-500/50 transition-colors shadow-lg shadow-black/5 flex flex-col justify-between">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">mic</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Voice Note Support</h3>
                            <p className="text-muted">
                                Lagi nyetir? Cukup rekam suara. "Habis beli kopi 25 ribu". Beres.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Feature 4: Analytics */}
                    <ScrollReveal delay={0.15} className="md:col-span-4 bg-background-card border border-border-color rounded-3xl p-8 group hover:border-orange-500/50 transition-colors shadow-lg shadow-black/5 flex flex-col justify-between">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">pie_chart</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Smart Analytics</h3>
                            <p className="text-muted">
                                Visualisasikan pengeluaranmu. Pahami kemana uangmu pergi setiap bulannya.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Row 3: Upload Invoice (4col) + Privacy (4col) + Export (4col) */}

                    {/* Feature 5: Upload Invoice PDF */}
                    <ScrollReveal delay={0.2} className="md:col-span-4 bg-background-card border border-border-color rounded-3xl p-8 group hover:border-sky-500/50 transition-colors shadow-lg shadow-black/5 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-sky-500">picture_as_pdf</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-3xl">upload_file</span>
                                </div>
                                <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/20">
                                    PDF
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Upload Invoice PDF</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                Kirim file PDF invoice pembelianmu lewat chat. AI akan membaca dan mencatat detail transaksi secara otomatis.
                            </p>
                        </div>

                        {/* Invoice Visual */}
                        <div className="mt-6 relative mx-auto w-full max-w-[180px] bg-white text-gray-700 p-3 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-500 font-mono text-[10px] border border-gray-200">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-dashed border-gray-300">
                                <span className="material-symbols-outlined text-red-500 text-base">picture_as_pdf</span>
                                <span className="font-bold text-gray-900 text-xs">Invoice.pdf</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between"><span className="text-gray-400">No.</span><span>INV-2026-001</span></div>
                                <div className="flex justify-between"><span className="text-gray-400">Tgl</span><span>17/02/2026</span></div>
                                <div className="flex justify-between"><span className="text-gray-400">Item</span><span>Hosting 1 Thn</span></div>
                            </div>
                            <div className="border-t border-gray-300 mt-2 pt-1 flex justify-between font-bold text-xs text-gray-900">
                                <span>Total</span><span>Rp 500.000</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Feature 6: Privacy */}
                    <ScrollReveal delay={0.25} className="md:col-span-4 bg-background-card border border-border-color rounded-3xl p-6 flex items-center gap-6 group hover:border-gray-500/50 transition-colors shadow-lg shadow-black/5">
                        <div className="w-16 h-16 bg-gray-500/10 dark:bg-gray-500/20 rounded-2xl flex items-center justify-center text-gray-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">lock</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">Privacy First</h3>
                            <p className="text-muted text-sm">
                                Data kamu terenkripsi dan aman. Kami tidak menjual data pengguna ke pihak ketiga.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Feature 7: Export Excel */}
                    <ScrollReveal delay={0.3} className="md:col-span-4 bg-background-card border border-border-color rounded-3xl p-6 flex items-center gap-6 group hover:border-green-500/50 transition-colors shadow-lg shadow-black/5">
                        <div className="w-16 h-16 bg-green-500/10 dark:bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-3xl">table_view</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">Export Excel</h3>
                            <p className="text-muted text-sm">
                                Butuh laporan rapi? Download rekap keuanganmu ke format Excel kapan saja.
                            </p>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
