import React, { useState } from 'react';
import { CreditCard, Wallet, Building2, ShieldCheck, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Beranda
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 1. Left Column (Billing & Payment) */}
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl font-extrabold text-slate-900">Checkout</h1>
            
            {/* Step 1: Informasi Akun */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center">1</div>
                <h2 className="text-xl font-bold">Informasi Akun</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-500 mb-1">Nama Lengkap</label>
                  <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium cursor-not-allowed">
                    John Doe
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 mb-1">Email</label>
                  <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium cursor-not-allowed">
                    john.doe@example.com
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2: Metode Pembayaran */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center">2</div>
                <h2 className="text-xl font-bold">Metode Pembayaran</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-3 transition-all ${paymentMethod === 'card' ? 'border-primary bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <CreditCard className={`w-8 h-8 ${paymentMethod === 'card' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`font-bold ${paymentMethod === 'card' ? 'text-primary' : 'text-slate-600'}`}>Kartu Kredit/Debit</span>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('ewallet')}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-3 transition-all ${paymentMethod === 'ewallet' ? 'border-primary bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <Wallet className={`w-8 h-8 ${paymentMethod === 'ewallet' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`font-bold ${paymentMethod === 'ewallet' ? 'text-primary' : 'text-slate-600'}`}>E-Wallet</span>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('va')}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-3 transition-all ${paymentMethod === 'va' ? 'border-primary bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <Building2 className={`w-8 h-8 ${paymentMethod === 'va' ? 'text-primary' : 'text-slate-400'}`} />
                  <span className={`font-bold ${paymentMethod === 'va' ? 'text-primary' : 'text-slate-600'}`}>Virtual Account</span>
                </div>
              </div>
            </section>

            {/* Step 3: Detail Pembayaran */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center">3</div>
                <h2 className="text-xl font-bold">Detail Pembayaran</h2>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nomor Kartu</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Masa Berlaku (MM/YY)</label>
                      <input type="text" placeholder="12/25" className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">CVC</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama di Kartu</label>
                    <input type="text" placeholder="JOHN DOE" className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase" />
                  </div>
                </div>
              )}

              {paymentMethod === 'ewallet' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-6">
                  <Wallet className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Pembayaran via GoPay / OVO / Dana / LinkAja.<br/>QRIS akan muncul setelah Anda klik "Bayar Sekarang".</p>
                </div>
              )}

              {paymentMethod === 'va' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pilih Bank</label>
                    <select className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                      <option value="">Pilih bank tujuan...</option>
                      <option value="bca">BCA Virtual Account</option>
                      <option value="mandiri">Mandiri Virtual Account</option>
                      <option value="bni">BNI Virtual Account</option>
                      <option value="bri">BRI Virtual Account</option>
                    </select>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">Nomor Virtual Account akan diberikan pada halaman selanjutnya.</p>
                </div>
              )}
            </section>
          </div>

          {/* 2. Right Column (Order Summary Card) */}
          <div className="w-full lg:w-96">
            <div className="sticky top-28 bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
              <h2 className="text-xl font-bold border-b border-slate-100 pb-4">Ringkasan Pesanan</h2>
              
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Course Thumbnail" 
                  className="w-20 h-20 object-cover rounded-lg border border-slate-200"
                />
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight mb-1">Mastering UI/UX & Web Dev</h3>
                  <p className="text-sm text-slate-500">Akses Selamanya</p>
                </div>
              </div>

              {/* Promo Code */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Tag className="w-4 h-4" /> Kode Promo
                </label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Masukkan kode" className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase" />
                  <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-slate-600 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 499.000</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Diskon (PROMO20)</span>
                  <span>- Rp 99.800</span>
                </div>
                <div className="flex justify-between">
                  <span>Pajak (11%)</span>
                  <span>Rp 43.912</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                <span className="text-slate-500 font-bold">Total Pembayaran</span>
                <span className="text-3xl font-black text-primary">Rp 443.112</span>
              </div>

              <button className="w-full bg-accent hover:bg-[#e06512] text-white font-extrabold py-5 px-4 rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-0.5 transition-all duration-200 text-xl mt-2">
                Bayar Sekarang
              </button>

              {/* Trust Badge */}
              <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3 border border-green-100 mt-2">
                <ShieldCheck className="w-8 h-8 text-green-600 shrink-0" />
                <p className="text-sm text-green-800 font-medium leading-tight">
                  <strong className="block">Garansi Uang Kembali 7 Hari</strong>
                  Pembayaran 100% aman dan terenkripsi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
