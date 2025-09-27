import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, LineChart, TrendingUp, FileWarning } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  ScatterChart,
  Scatter,
  Legend,
} from 'recharts';
import { faker } from '@faker-js/faker';

interface DataVisualizationProps {
  hasData: boolean;
  isProcessed: boolean;
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ hasData, isProcessed }) => {
  const [activeChart, setActiveChart] = useState('bar');

  const barData = Array.from({ length: 8 }, () => ({
    name: faker.commerce.productName().substring(0, 15),
    value: faker.number.int({ min: 10, max: 100 }),
    sales: faker.number.int({ min: 1000, max: 5000 }),
  }));

  const lineData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'][i],
    revenue: faker.number.int({ min: 30000, max: 80000 }),
    users: faker.number.int({ min: 1000, max: 5000 }),
  }));

  const pieData = [
    { name: 'Teknologi', value: 400, color: '#3B82F6' },
    { name: 'Kesehatan', value: 300, color: '#10B981' },
    { name: 'Keuangan', value: 300, color: '#F59E0B' },
    { name: 'Pendidikan', value: 200, color: '#EF4444' },
  ];

  const scatterData = Array.from({ length: 20 }, () => ({
    x: faker.number.int({ min: 20, max: 100 }),
    y: faker.number.int({ min: 20, max: 100 }),
  }));

  const charts = [
    { id: 'bar', label: 'Grafik Batang', icon: BarChart3 },
    { id: 'line', label: 'Grafik Garis', icon: LineChart },
    { id: 'pie', label: 'Grafik Lingkaran', icon: PieChart },
    { id: 'scatter', label: 'Grafik Sebar', icon: TrendingUp },
  ];

  if (!hasData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <FileWarning className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Data yang Diunggah</h3>
        <p className="text-gray-600">Silakan unggah dataset terlebih dahulu untuk memvisualisasikan data Anda.</p>
      </motion.div>
    );
  }

  const renderActiveChart = () => {
    switch (activeChart) {
      case 'bar':
        return (
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3B82F6" name="Nilai" />
            <Bar dataKey="sales" fill="#82ca9d" name="Penjualan" />
          </BarChart>
        );
      case 'line':
        return (
          <RechartsLineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} name="Pendapatan" />
            <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} name="Pengguna Aktif" />
          </RechartsLineChart>
        );
      case 'pie':
        return (
          <RechartsPieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={(entry) => `${entry.name}`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number, name: string) => [`${value}`, name]} />
            <Legend />
          </RechartsPieChart>
        );
      case 'scatter':
        return (
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Fitur X" />
            <YAxis type="number" dataKey="y" name="Fitur Y" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Poin Dataset" data={scatterData} fill="#3B82F6" />
          </ScatterChart>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Visualisasi Data</h2>
          {isProcessed && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Data Diproses
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {charts.map((chart) => (
            <button
              key={chart.id}
              onClick={() => setActiveChart(chart.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeChart === chart.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <chart.icon className="h-4 w-4" />
              <span>{chart.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            {renderActiveChart()}
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Info Dataset</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Baris:</span>
              <span className="font-medium">1.250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Kolom:</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ukuran:</span>
              <span className="font-medium">2.4 MB</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Kualitas Data</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Nilai Hilang:</span>
              <span className={`font-medium ${isProcessed ? 'text-green-600' : 'text-yellow-600'}`}>
                {isProcessed ? '0%' : '2.3%'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duplikat:</span>
              <span className="font-medium text-green-600">0%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Outlier:</span>
              <span className="font-medium text-red-600">1.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Korelasi</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Harga vs Penjualan:</span>
              <span className="font-medium">0.76</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Peringkat vs Ulasan:</span>
              <span className="font-medium">0.82</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Usia vs Pendapatan:</span>
              <span className="font-medium">0.45</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataVisualization;
