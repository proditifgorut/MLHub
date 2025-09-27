import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, BarChart3, SlidersHorizontal, Play } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import DataVisualization from '../components/DataVisualization';
import ModelTraining from '../components/ModelTraining';
import DataProcessing from '../components/DataProcessing';

const AnalisisData: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDataProcessed, setIsDataProcessed] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
        setActiveTab('process');
        setIsDataProcessed(false);
      }
    },
  });

  const tabs = [
    { id: 'upload', label: '1. Unggah', icon: Upload },
    { id: 'process', label: '2. Proses Data', icon: SlidersHorizontal },
    { id: 'visualize', label: '3. Visualisasi', icon: BarChart3 },
    { id: 'train', label: '4. Latih Model', icon: Play },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ruang Kerja Analisis Data</h1>
          <p className="text-gray-600">Lingkungan lengkap Anda untuk analisis data, visualisasi, dan penemuan wawasan.</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {activeTab === 'upload' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Unggah Dataset</h2>
              
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {isDragActive ? 'Letakkan file di sini' : 'Unggah dataset Anda'}
                </h3>
                <p className="text-gray-600 mb-4">
                  Seret dan letakkan file CSV atau Excel Anda, atau klik untuk menelusuri
                </p>
                <div className="text-sm text-gray-500">
                  Format yang didukung: CSV, XLS, XLSX (Ukuran maks: 10MB)
                </div>
              </div>

              {uploadedFile && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-green-900">File berhasil diunggah!</h4>
                      <p className="text-green-700">{uploadedFile.name}</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('process')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Proses Data
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'process' && (
            <DataProcessing hasData={!!uploadedFile} onProcessComplete={() => setIsDataProcessed(true)} />
          )}

          {activeTab === 'visualize' && (
            <DataVisualization hasData={!!uploadedFile} isProcessed={isDataProcessed} />
          )}

          {activeTab === 'train' && (
            <ModelTraining hasData={!!uploadedFile} isProcessed={isDataProcessed} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalisisData;
