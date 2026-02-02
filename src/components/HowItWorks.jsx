import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
    const steps = [
        {
            icon: "chat",
            title: "1. Kirim Chat",
            desc: "Kirim pesan ke nomor WhatsApp bot kami seperti chatting biasa. Contoh: \"Tadi makan siang 25rb\".",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: "psychology",
            title: "2. AI Memproses",
            desc: "Teknologi AI kami mengenali kategori pengeluaran dan nominal secara otomatis dalam hitungan detik.",
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        },
        {
            icon: "check_circle",
            title: "3. Selesai",
            desc: "Transaksi tercatat rapi! Anda akan langsung mendapat balasan sisa saldo budget harian Anda.",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                            Cara Kerja <span className="text-primary">Sangat Simpel</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="text-muted max-w-2xl mx-auto text-lg">
                            Tidak perlu install aplikasi tambahan. Gunakan WhatsApp yang sudah ada di HP Anda sekarang.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                            <div className="bg-background-card border border-border-color p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group h-full shadow-lg shadow-black/5">
                                <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${step.color} text-4xl`}>
                                        {step.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}

                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 -z-10 border-t border-dashed border-border-color"></div>
                </div>
            </div>
        </section>
    );
}
