import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, CheckCircle, Loader, Trash2, Scale, Binary, FileWarning, Info } from 'lucide-react';

interface DataProcessingProps {
  hasData: boolean;
  onProcessComplete: () => void;
}

const DataProcessing: React.FC<DataProcessingProps> = ({ hasData, onProcessComplete }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingDone, setProcessingDone] = useState(false);
  const [summary, setSummary] = useState({ rowsRemoved: 0, columnsScaled: 0, columnsEncoded: 0 });

  const [processingOptions, setProcessingOptions] = useState({
    missingValues: 'remove',
    featureScaling: 'standardization',
    encoding: 'one-hot',
  });

  const handleProcess = () => {
    setIsProcessing(true);
    setProcessingDone(false);
    setTimeout(() => {
      setSummary({
        rowsRemoved: Math.floor(Math.random() * 50),
        columnsScaled: 3,
        columnsEncoded: 2,
      });
      setIsProcessing(false);
      setProcessingDone(true);
      onProcessComplete();
    }, 2500);
  };

  if (!hasData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <FileWarning className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Data yang Diunggah</h3>
        <p className="text-gray-600">Silakan buka tab 'Unggah' untuk mengunggah dataset terlebih dahulu.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Pra-pemrosesan Data</h2>
      <p className="text-gray-600 mb-6">Bersihkan dan siapkan data Anda untuk analisis dan pelatihan model. Ini adalah langkah penting bagi setiap analis data atau ilmuwan data.</p>
      
      {processingDone ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Pemrosesan Selesai!</h3>
          <p className="text-gray-600 mb-6">Data Anda telah dibersihkan dan siap untuk langkah selanjutnya.</p>
          
          <div className="bg-gray-50 rounded-lg p-4 max-w-md mx-auto text-left space-y-2">
            <h4 className="font-semibold text-gray-800">Ringkasan Pemrosesan:</h4>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-red-600">{summary.rowsRemoved} baris</span> dengan nilai yang hilang telah dihapus.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-blue-600">{summary.columnsScaled} kolom numerik</span> telah diskalakan menggunakan {processingOptions.featureScaling}.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-green-600">{summary.columnsEncoded} kolom kategorikal</span> telah di-encode menggunakan {processingOptions.encoding}.
            </p>
          </div>

          <button
            onClick={() => setProcessingDone(false)}
            className="mt-6 text-blue-600 font-semibold hover:text-blue-700"
          >
            Proses Ulang Data
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <Trash2 className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Nilai yang Hilang</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Pilih cara menangani baris dengan data yang hilang. Penting untuk kualitas data.</p>
              <select
                value={processingOptions.missingValues}
                onChange={(e) => setProcessingOptions({...processingOptions, missingValues: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="remove">Hapus Baris</option>
                <option value="fill-mean">Isi dengan Rata-rata</option>
                <option value="fill-median">Isi dengan Median</option>
              </select>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <Scale className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Penskalaan Fitur</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Normalisasi fitur numerik untuk meningkatkan kinerja model.</p>
              <select
                value={processingOptions.featureScaling}
                onChange={(e) => setProcessingOptions({...processingOptions, featureScaling: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="standardization">Standardisasi (Z-score)</option>
                <option value="normalization">Normalisasi (Min-Max)</option>
              </select>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <Binary className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Encoding Kategorikal</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Ubah kategori teks menjadi format numerik yang dapat dibaca mesin.</p>
              <select
                value={processingOptions.encoding}
                onChange={(e) => setProcessingOptions({...processingOptions, encoding: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="one-hot">One-Hot Encoding</option>
                <option value="label">Label Encoding</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleProcess}
              disabled={isProcessing}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Memproses Data...</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="h-5 w-5" />
                  <span>Terapkan Pemrosesan</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DataProcessing;
