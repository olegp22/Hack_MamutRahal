import React, { useState } from 'react';
import { 
  User, Mail, Tag, Database, ShieldAlert, Package, 
  RefreshCcw, Handshake, ExternalLink, AlertTriangle, 
  Info, AlertCircle, Eye, EyeOff, CheckCircle2, Download
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showAnswered, setShowAnswered] = useState(false);
  
  // Состояние для выбранных строк (чекбоксов)
  const [selectedIds, setSelectedIds] = useState([]);

  const [tickets, setTickets] = useState([
    { id: 1, customer: "Иван Иванов", subject: "Не подошел размер", category: "Возврат товара", priority: "Средний", date: "10:25", text: "Здравствуйте, хочу вернуть кроссовки, не подошел размер. Номер заказа 5541.", isAnswered: false },
    { id: 2, customer: "TechStore", subject: "Предложение о поставках", category: "Сотрудничество", priority: "Неважно", date: "11:10", text: "Добрый день! Мы хотим предложить вам оптовые поставки комплектующих.", isAnswered: false },
    { id: 3, customer: "Анна Сидорова", subject: "Где моя посылка?", category: "Проблемы с заказом", priority: "Средний", date: "11:45", text: "Заказ №992. Жду уже неделю, трек-номер не обновляется!", isAnswered: false },
    { id: 4, customer: "Аноним", subject: "Ждите проблем", category: "Угрозы", priority: "Высокая", date: "12:00", text: "Если вы не ответите сейчас же, я напишу жалобу во все инстанции!", isAnswered: false },
    { id: 5, customer: "Дмитрий К.", subject: "Срочно! Отмена", category: "Проблемы с заказом", priority: "Высокая", date: "12:15", text: "ОШИБСЯ В АДРЕСЕ! Срочно отмените заказ 1002, пока не отправили!", isAnswered: false },
  ]);

  const handleAnswer = (id) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, isAnswered: true } : t));
    // Снимаем выделение, если письмо обработано и скрывается
    if (!showAnswered) {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };

  // --- Логика фильтрации ---
  const filteredTickets = tickets.filter(t => {
    const matchCat = categoryFilter === 'all' || t.category === categoryFilter;
    const matchPri = priorityFilter === 'all' || t.priority === priorityFilter;
    const matchStatus = showAnswered || !t.isAnswered;
    return matchCat && matchPri && matchStatus;
  });

  // --- Логика чекбоксов ---
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredTickets.map(t => t.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (e, id) => {
    if (e.target.checked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };

  // --- Логика ЭКСПОРТА в CSV ---
  const handleExport = () => {
    // Если есть выбранные чекбоксы — экспортируем их, иначе экспортируем весь отфильтрованный список
    const dataToExport = selectedIds.length > 0 
      ? tickets.filter(t => selectedIds.includes(t.id))
      : filteredTickets;

    if (dataToExport.length === 0) return alert("Нет данных для экспорта");

    // Формируем заголовки CSV
    const headers = ["ID", "Приоритет", "Категория", "Клиент", "Дата", "Текст письма", "Статус"];
    const csvRows = [headers.join(',')];

    // Формируем строки
    dataToExport.forEach(t => {
      const row = [
        t.id,
        t.priority,
        t.category,
        `"${t.customer}"`, // Кавычки нужны для безопасного экспорта текста с запятыми
        t.date,
        `"${t.text.replace(/"/g, '""')}"`, // Экранируем кавычки внутри текста
        t.isAnswered ? "Обработано" : "Ожидает"
      ];
      csvRows.push(row.join(','));
    });

    // Создаем Blob с добавлением BOM (чтобы Excel правильно читал кириллицу)
    const csvString = csvRows.join('\n');
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvString], { type: 'text/csv;charset=utf-8;' });
    
    // Создаем невидимую ссылку для скачивания
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `enigma_export_${new Date().toLocaleDateString()}.csv`;
    link.click();
  };

  // Визуальные элементы
  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'Возврат товара': return <RefreshCcw size={16} className="text-orange-500" />;
      case 'Проблемы с заказом': return <Package size={16} className="text-blue-500" />;
      case 'Угрозы': return <ShieldAlert size={16} className="text-red-600" />;
      case 'Сотрудничество': return <Handshake size={16} className="text-green-500" />;
      default: return <Tag size={16} />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'Высокая': return <span className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold border border-red-200"><AlertCircle size={12}/> ВЫСОКАЯ</span>;
      case 'Средний': return <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold border border-yellow-200"><AlertTriangle size={12}/> СРЕДНИЙ</span>;
      default: return <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold border border-gray-200"><Info size={12}/> НЕВАЖНО</span>;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      <div className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
        <div className="p-6 text-xl font-bold flex items-center gap-2 border-b border-slate-700">
          <Database className="text-blue-400" /> ENIGMA Agent
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-slate-800 text-slate-400'}`}>
            <Mail size={20} /> Входящие AI
          </button>
          <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'profile' ? 'bg-blue-600' : 'hover:bg-slate-800 text-slate-400'}`}>
            <User size={20} /> Профиль
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-6 border-b shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Рабочее пространство</h1>
            
            <div className="flex gap-3">
              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all bg-green-600 hover:bg-green-700 text-white shadow-sm"
              >
                <Download size={16}/> 
                {selectedIds.length > 0 ? `Экспорт выбранных (${selectedIds.length})` : 'Экспорт таблицы'}
              </button>

              <button 
                onClick={() => setShowAnswered(!showAnswered)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border ${showAnswered ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-600'}`}
              >
                {showAnswered ? <Eye size={16}/> : <EyeOff size={16}/>}
                {showAnswered ? "Скрыть архив" : "Показать архив"}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase w-24">Тематика:</span>
              <div className="flex gap-2">
                {['all', 'Возврат товара', 'Проблемы с заказом', 'Угрозы', 'Сотрудничество'].map(cat => (
                  <button key={cat} onClick={() => setCategoryFilter(cat)} className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${categoryFilter === cat ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white text-slate-600 hover:border-slate-300'}`}>
                    {cat === 'all' ? 'Все темы' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase w-24">Важность:</span>
              <div className="flex gap-2">
                {['all', 'Высокая', 'Средний', 'Неважно'].map(pri => (
                  <button key={pri} onClick={() => setPriorityFilter(pri)} className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${priorityFilter === pri ? 'bg-slate-800 border-slate-800 text-white' : 'bg-white text-slate-600 hover:border-slate-300'}`}>
                    {pri === 'all' ? 'Любая важность' : pri}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b">
                <tr>
                  <th className="p-4 w-10 text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer h-4 w-4"
                      checked={filteredTickets.length > 0 && selectedIds.length === filteredTickets.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase w-32">Приоритет</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Тема / Категория</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Отправитель</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Текст письма</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTickets.map(ticket => (
                  <tr key={ticket.id} className={`transition-all ${ticket.isAnswered ? 'opacity-50 bg-slate-50' : selectedIds.includes(ticket.id) ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                    <td className="p-4 text-center">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer h-4 w-4"
                        checked={selectedIds.includes(ticket.id)}
                        onChange={(e) => handleSelectOne(e, ticket.id)}
                      />
                    </td>
                    <td className="p-4">{getPriorityBadge(ticket.priority)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        {getCategoryIcon(ticket.category)} {ticket.category}
                      </div>
                    </td>
                    <td className="p-4 italic text-sm text-slate-600">{ticket.customer}</td>
                    <td className="p-4 max-w-xs truncate text-sm text-slate-500">{ticket.text}</td>
                    <td className="p-4 text-center">
                      {ticket.isAnswered ? (
                        <span className="text-green-600 flex items-center justify-center gap-1 font-bold text-xs">
                          <CheckCircle2 size={14}/> Отвечено
                        </span>
                      ) : (
                        <button 
                          onClick={() => handleAnswer(ticket.id)}
                          className="mx-auto flex items-center gap-1 bg-white border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                        >
                          <ExternalLink size={14} /> Обработать
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}