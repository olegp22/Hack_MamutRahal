// // // import React, { useState } from 'react';
// // // import { User, MessageSquare, Send, Mail, Tag, Database, CheckCircle } from 'lucide-react';

// // // export default function App() {
// // //   const [activeTab, setActiveTab] = useState('chat');
  
// // //   // Состояние профиля
// // //   const [profile, setProfile] = useState({
// // //     name: 'Протопопов Олег',
// // //     role: 'Менеджер поддержки',
// // //     company: 'Tech Solutions'
// // //   });

// // //   // Состояние чата
// // //   const [messages, setMessages] = useState([]);
// // //   const [inputText, setInputText] = useState('');
// // //   const [isTyping, setIsTyping] = useState(false);

// // //   // Симуляция работы AI Агента
// // //   const handleSendMessage = (e) => {
// // //     e.preventDefault();
// // //     if (!inputText.trim()) return;

// // //     const userMessage = { id: Date.now(), sender: 'user', text: inputText };
// // //     setMessages(prev => [...prev, userMessage]);
// // //     setInputText('');
// // //     setIsTyping(true);

// // //     // Имитация задержки ответа сервера (AI)
// // //     setTimeout(() => {
// // //       const aiResponse = {
// // //         id: Date.now() + 1,
// // //         sender: 'ai',
// // //         classification: 'Жалоба / Возврат средств',
// // //         extractedData: [
// // //           { key: 'Номер заказа', value: '№48151623' },
// // //           { key: 'Товар', value: 'Ноутбук ProX' },
// // //           { key: 'Причина', value: 'Брак экрана' }
// // //         ],
// // //         text: `Здравствуйте! Приносим извинения за проблемы с вашим заказом №48151623 (Ноутбук ProX). Мы зафиксировали вашу заявку на возврат средств по причине брака экрана. Пожалуйста, отправьте устройство по адресу нашего сервисного центра, и мы вернем деньги в течение 3 рабочих дней.`
// // //       };
// // //       setMessages(prev => [...prev, aiResponse]);
// // //       setIsTyping(false);
// // //     }, 1500);
// // //   };

// //   // return (
// // //     <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
      
// // //       {/* Боковая панель (Sidebar) */}
// // //       <div className="w-64 bg-slate-900 text-white flex flex-col">
// // //         <div className="p-6 text-2xl font-bold flex items-center gap-2 border-b border-slate-700">
// // //           <Database className="text-blue-400" />
// // //           AI Agent
// // //         </div>
// // //         <nav className="flex-1 p-4 space-y-2">
// // //           <button 
// // //             onClick={() => setActiveTab('chat')}
// // //             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'chat' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
// // //           >
// // //             <MessageSquare size={20} /> Обработка писем
// // //           </button>
// // //           <button 
// // //             onClick={() => setActiveTab('profile')}
// // //             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
// // //           >
// // //             <User size={20} /> Профиль агента
// // //           </button>
// // //         </nav>
// // //         <div className="p-4 border-t border-slate-700 text-sm text-slate-400">
// // //           Текущий оператор:<br/>
// // //           <span className="font-semibold text-white">{profile.name}</span>
// // //         </div>
// // //       </div>

// //   //     {/* Основная рабочая область */}
// //   //     <div className="flex-1 flex flex-col">
// //   //       {activeTab === 'profile' ? (
// //   //         <ProfileTab profile={profile} setProfile={setProfile} />
// //   //       ) : (
// //   //         <ChatTab 
// //   //           messages={messages} 
// //   //           inputText={inputText} 
// //   //           setInputText={setInputText} 
// //   //           handleSendMessage={handleSendMessage} 
// //   //           isTyping={isTyping} 
// //   //         />
// //   //       )}
// //   //     </div>
// //   //   </div>
// //   // );
// // // }

// // // // --- Компонент Профиля ---
// // // function ProfileTab({ profile, setProfile }) {
// // //   const handleChange = (e) => {
// // //     setProfile({ ...profile, [e.target.name]: e.target.value });
// // //   };

// // //   return (
// // //     <div className="p-8 max-w-2xl mx-auto w-full">
// // //       <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
// // //         <User className="text-blue-600" /> Настройки профиля
// // //       </h2>
// // //       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-1">ФИО / Название агента</label>
// // //           <input 
// // //             type="text" name="name" value={profile.name} onChange={handleChange}
// // //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-1">Роль (System Prompt контекст)</label>
// // //           <input 
// // //             type="text" name="role" value={profile.role} onChange={handleChange}
// // //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-1">Компания</label>
// // //           <input 
// // //             type="text" name="company" value={profile.company} onChange={handleChange}
// // //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// // //           />
// // //         </div>
// // //         <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
// // //           <CheckCircle size={18} /> Сохранить настройки
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // --- Компонент Чата / Обработки ---
// // // function ChatTab({ messages, inputText, setInputText, handleSendMessage, isTyping }) {
// // //   return (
// // //     <div className="flex-1 flex flex-col h-full bg-slate-50">
// // //       {/* Заголовок */}
// // //       <header className="bg-white p-4 border-b shadow-sm flex items-center justify-between">
// // //         <h1 className="text-xl font-semibold text-gray-800">Анализ входящих обращений</h1>
// // //       </header>

// // //       {/* Окно сообщений */}
// // //       <div className="flex-1 overflow-y-auto p-6 space-y-6">
// // //         {messages.length === 0 && (
// // //           <div className="text-center text-gray-400 mt-20 flex flex-col items-center">
// // //             <Mail size={48} className="mb-4 opacity-50" />
// // //             <p>Вставьте текст письма клиента, чтобы AI проанализировал его.</p>
// // //           </div>
// // //         )}

// // //         {messages.map((msg) => (
// // //           <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
// // //             <div className={`max-w-[80%] rounded-2xl p-5 shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'}`}>
              
// // //               {msg.sender === 'ai' && (
// // //                 <div className="mb-4 space-y-3">
// // //                   {/* Блок классификации */}
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Классификация:</span>
// // //                     <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
// // //                       <Tag size={14} /> {msg.classification}
// // //                     </span>
// // //                   </div>

// // //                   {/* Блок извлеченных данных */}
// // //                   <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
// // //                     <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Извлеченные данные:</span>
// // //                     <ul className="space-y-1">
// // //                       {msg.extractedData.map((data, i) => (
// // //                         <li key={i} className="text-sm flex gap-2">
// // //                           <span className="text-gray-500 w-1/3">{data.key}:</span>
// // //                           <span className="font-semibold text-gray-800">{data.value}</span>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                   <hr className="border-gray-100" />
// // //                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Сгенерированный ответ:</span>
// // //                 </div>
// // //               )}
              
// // //               <div className={`whitespace-pre-wrap leading-relaxed ${msg.sender === 'ai' ? 'text-gray-800' : 'text-white'}`}>
// // //                 {msg.text}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //         {isTyping && (
// // //           <div className="flex justify-start">
// // //             <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-2 text-gray-500">
// // //               <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full"></div>
// // //               <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full delay-75"></div>
// // //               <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full delay-150"></div>
// // //               <span className="ml-2 text-sm">AI анализирует текст и готовит ответ...</span>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Поле ввода */}
// // //       <div className="bg-white p-4 border-t">
// // //         <form onSubmit={handleSendMessage} className="max-w-5xl mx-auto relative flex items-end gap-2">
// // //           <textarea
// // //             value={inputText}
// // //             onChange={(e) => setInputText(e.target.value)}
// // //             placeholder="Вставьте текст письма клиента сюда..."
// // //             className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[60px] max-h-40"
// // //             rows={2}
// // //             onKeyDown={(e) => {
// // //               if (e.key === 'Enter' && !e.shiftKey) {
// // //                 e.preventDefault();
// // //                 handleSendMessage(e);
// // //               }
// // //             }}
// // //           />
// // //           <button 
// // //             type="submit" 
// // //             disabled={!inputText.trim() || isTyping}
// // //             className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
// // //           >
// // //             <Send size={20} />
// // //           </button>
// // //         </form>
// // //         <div className="text-center text-xs text-gray-400 mt-2">
// // //           Нажмите Enter для отправки, Shift + Enter для переноса строки
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from 'react';
// // import { User, Mail, Tag, Database, ShieldAlert, Package, RefreshCcw, Handshake, Search, ExternalLink } from 'lucide-react';

// // export default function App() {
// //   const [activeTab, setActiveTab] = useState('dashboard');
// //   const [filter, setFilter] = useState('all');

// //   // Имитация базы данных отсортированных писем
// //   const [tickets] = useState([
// //     { id: 1, customer: "Иван Иванов", subject: "Не подошел размер", category: "Возврат товара", status: "AI Обработано", date: "10:25", text: "Здравствуйте, хочу вернуть кроссовки, не подошел размер. Номер заказа 5541." },
// //     { id: 2, customer: "TechStore", subject: "Предложение о поставках", category: "Сотрудничество", status: "AI Обработано", date: "11:10", text: "Добрый день! Мы хотим предложить вам оптовые поставки комплектующих." },
// //     { id: 3, customer: "Анна Сидорова", subject: "Где моя посылка?", category: "Проблемы с заказом", status: "AI Обработано", date: "11:45", text: "Заказ №992. Жду уже неделю, трек-номер не обновляется!" },
// //     { id: 4, customer: "Аноним", subject: "Ждите проблем", category: "Угрозы", status: "Критично", date: "12:00", text: "Если вы не ответите сейчас же, я напишу жалобу во все инстанции и засужу вас!" },
// //   ]);

// //   const getCategoryIcon = (cat) => {
// //     switch(cat) {
// //       case 'Возврат товара': return <RefreshCcw size={16} className="text-orange-500" />;
// //       case 'Проблемы с заказом': return <Package size={16} className="text-blue-500" />;
// //       case 'Угрозы': return <ShieldAlert size={16} className="text-red-600" />;
// //       case 'Сотрудничество': return <Handshake size={16} className="text-green-500" />;
// //       default: return <Tag size={16} />;
// //     }
// //   };
// // // --- Компонент Профиля ---
// // function ProfileTab({ profile, setProfile }) {
// //   const handleChange = (e) => {
// //     setProfile({ ...profile, [e.target.name]: e.target.value });
// //   };
// // return (
// //     <div className="p-8 max-w-2xl mx-auto w-full">
// //       <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
// //         <User className="text-blue-600" /> Настройки профиля
// //       </h2>
// //       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">ФИО / Название агента</label>
// //           <input 
// //             type="text" name="name" value={profile.name} onChange={handleChange}
// //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">Роль (System Prompt контекст)</label>
// //           <input 
// //             type="text" name="role" value={profile.role} onChange={handleChange}
// //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">Компания</label>
// //           <input 
// //             type="text" name="company" value={profile.company} onChange={handleChange}
// //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //         </div>
// //         <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
// //           <CheckCircle size={18} /> Сохранить настройки
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// //   const filteredTickets = filter === 'all' ? tickets : tickets.filter(t => t.category === filter);

// //   return (
// //     <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-slate-900 text-white flex flex-col">
// //         <div className="p-6 text-xl font-bold flex items-center gap-2 border-b border-slate-700">
// //           <Database className="text-blue-400" />
// //           ENIGMA Agent
// //         </div>
// //         <nav className="flex-1 p-4 space-y-2">
// //           <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
// //             <Mail size={20} /> Входящие AI
// //           </button>
// //           <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
// //             <User size={20} /> Профиль
// //           </button>
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm">
// //           <h1 className="text-xl font-semibold">Панель оператора: Автоматическая сортировка</h1>
// //           <div className="flex gap-2">
// //             {['all', 'Возврат товара', 'Проблемы с заказом', 'Угрозы', 'Сотрудничество'].map(cat => (
// //               <button 
// //                 key={cat}
// //                 onClick={() => setFilter(cat)}
// //                 className={`px-3 py-1 rounded-md text-sm border ${filter === cat ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white text-gray-500'}`}
// //               >
// //                 {cat === 'all' ? 'Все' : cat}
// //               </button>
// //             ))}
// //           </div>
// //         </header>

// //         <main className="flex-1 overflow-auto p-6">
// //           {activeTab === 'dashboard' ? (
// //             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
// //               <table className="w-full text-left border-collapse">
// //                 <thead className="bg-gray-50 border-b">
// //                   <tr>
// //                     <th className="p-4 text-xs font-bold text-gray-500 uppercase">Категория</th>
// //                     <th className="p-4 text-xs font-bold text-gray-500 uppercase">Отправитель</th>
// //                     <th className="p-4 text-xs font-bold text-gray-500 uppercase">Суть сообщения</th>
// //                     <th className="p-4 text-xs font-bold text-gray-500 uppercase">Время</th>
// //                     <th className="p-4 text-xs font-bold text-gray-500 uppercase">Действие</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y">
// //                   {filteredTickets.map(ticket => (
// //                     <tr key={ticket.id} className="hover:bg-blue-50/50 transition-colors">
// //                       <td className="p-4">
// //                         <span className="flex items-center gap-2 text-sm font-medium">
// //                           {getCategoryIcon(ticket.category)} {ticket.category}
// //                         </span>
// //                       </td>
// //                       <td className="p-4 font-medium text-gray-700">{ticket.customer}</td>
// //                       <td className="p-4 text-sm text-gray-500 max-w-xs truncate">{ticket.text}</td>
// //                       <td className="p-4 text-sm text-gray-400">{ticket.date}</td>
// //                       <td className="p-4">
// //                         <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-semibold">
// //                           <ExternalLink size={14} /> Детали
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           ) : (
// //             <div className="p-10 text-center text-gray-500 italic">Настройки профиля оператора...</div>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import { 
//   User, Mail, Tag, Database, ShieldAlert, Package, 
//   RefreshCcw, Handshake, ExternalLink, AlertTriangle, 
//   Info, AlertCircle 
// } from 'lucide-react';

// export default function App() {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [categoryFilter, setCategoryFilter] = useState('all');
//   const [priorityFilter, setPriorityFilter] = useState('all');

//   // Расширенная база данных с учетом приоритетов
//   const [tickets] = useState([
//     { 
//       id: 1, customer: "Иван Иванов", subject: "Не подошел размер", 
//       category: "Возврат товара", priority: "Средний", 
//       status: "AI Обработано", date: "10:25", 
//       text: "Здравствуйте, хочу вернуть кроссовки, не подошел размер. Номер заказа 5541." 
//     },
//     { 
//       id: 2, customer: "TechStore", subject: "Предложение о поставках", 
//       category: "Сотрудничество", priority: "Неважно", 
//       status: "AI Обработано", date: "11:10", 
//       text: "Добрый день! Мы хотим предложить вам оптовые поставки комплектующих." 
//     },
//     { 
//       id: 3, customer: "Анна Сидорова", subject: "Где моя посылка?", 
//       category: "Проблемы с заказом", priority: "Средний", 
//       status: "AI Обработано", date: "11:45", 
//       text: "Заказ №992. Жду уже неделю, трек-номер не обновляется!" 
//     },
//     { 
//       id: 4, customer: "Аноним", subject: "Ждите проблем", 
//       category: "Угрозы", priority: "Высокая", 
//       status: "Критично", date: "12:00", 
//       text: "Если вы не ответите сейчас же, я напишу жалобу во все инстанции!" 
//     },
//     { 
//       id: 5, customer: "Дмитрий К.", subject: "Срочно! Отмена", 
//       category: "Проблемы с заказом", priority: "Высокая", 
//       status: "AI Обработано", date: "12:15", 
//       text: "ОШИБСЯ В АДРЕСЕ! Срочно отмените заказ 1002, пока не отправили!" 
//     },
//   ]);

//   // Функции для визуализации иконок
//   const getCategoryIcon = (cat) => {
//     switch(cat) {
//       case 'Возврат товара': return <RefreshCcw size={16} className="text-orange-500" />;
//       case 'Проблемы с заказом': return <Package size={16} className="text-blue-500" />;
//       case 'Угрозы': return <ShieldAlert size={16} className="text-red-600" />;
//       case 'Сотрудничество': return <Handshake size={16} className="text-green-500" />;
//       default: return <Tag size={16} />;
//     }
//   };

//   const getPriorityBadge = (priority) => {
//     switch(priority) {
//       case 'Высокая': 
//         return <span className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold border border-red-200"><AlertCircle size={12}/> ВЫСОКАЯ</span>;
//       case 'Средний': 
//         return <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold border border-yellow-200"><AlertTriangle size={12}/> СРЕДНИЙ</span>;
//       default: 
//         return <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold border border-gray-200"><Info size={12}/> НЕВАЖНО</span>;
//     }
//   };

//   // Логика фильтрации
//   const filteredTickets = tickets.filter(t => {
//     const matchCat = categoryFilter === 'all' || t.category === categoryFilter;
//     const matchPri = priorityFilter === 'all' || t.priority === priorityFilter;
//     return matchCat && matchPri;
//   });

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
//       {/* Боковая панель */}
//       <div className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
//         <div className="p-6 text-xl font-bold flex items-center gap-2 border-b border-slate-700">
//           <Database className="text-blue-400" /> ENIGMA Agent
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}>
//             <Mail size={20} /> Входящие AI
//           </button>
//           <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'profile' ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}>
//             <User size={20} /> Профиль
//           </button>
//         </nav>
//       </div>

//       {/* Основной контент */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white p-6 border-b shadow-sm space-y-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-slate-800">Рабочее пространство оператора</h1>
//             <div className="text-sm text-slate-500 font-medium">Всего писем: {filteredTickets.length}</div>
//           </div>
          
//           <div className="flex flex-col gap-3">
//             {/* Группа фильтров по Категории */}
//             <div className="flex items-center gap-2">
//               <span className="text-xs font-bold text-slate-400 uppercase w-24">Тематика:</span>
//               <div className="flex gap-2">
//                 {['all', 'Возврат товара', 'Проблемы с заказом', 'Угрозы', 'Сотрудничество'].map(cat => (
//                   <button key={cat} onClick={() => setCategoryFilter(cat)} className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${categoryFilter === cat ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:border-slate-300'}`}>
//                     {cat === 'all' ? 'Все темы' : cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Группа фильтров по Важности */}
//             <div className="flex items-center gap-2">
//               <span className="text-xs font-bold text-slate-400 uppercase w-24">Важность:</span>
//               <div className="flex gap-2">
//                 {['all', 'Высокая', 'Средний', 'Неважно'].map(pri => (
//                   <button key={pri} onClick={() => setPriorityFilter(pri)} className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${priorityFilter === pri ? 'bg-slate-800 border-slate-800 text-white shadow-md' : 'bg-white text-slate-600 hover:border-slate-300'}`}>
//                     {pri === 'all' ? 'Любая важность' : pri}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-auto p-6 bg-slate-100">
//           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//             <table className="w-full text-left border-collapse">
//               <thead className="bg-slate-50 border-b">
//                 <tr>
//                   <th className="p-4 text-xs font-bold text-slate-500 uppercase">Срочность</th>
//                   <th className="p-4 text-xs font-bold text-slate-500 uppercase">Категория</th>
//                   <th className="p-4 text-xs font-bold text-slate-500 uppercase">Клиент</th>
//                   <th className="p-4 text-xs font-bold text-slate-500 uppercase">Содержание письма</th>
//                   <th className="p-4 text-xs font-bold text-slate-500 uppercase">Действие</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y">
//                 {filteredTickets.map(ticket => (
//                   <tr key={ticket.id} className={`hover:bg-blue-50/50 transition-colors ${ticket.priority === 'Высокая' ? 'bg-red-50/30' : ''}`}>
//                     <td className="p-4">{getPriorityBadge(ticket.priority)}</td>
//                     <td className="p-4">
//                       <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                         {getCategoryIcon(ticket.category)} {ticket.category}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <div className="text-sm font-bold text-slate-800">{ticket.customer}</div>
//                       <div className="text-xs text-slate-400">{ticket.date}</div>
//                     </td>
//                     <td className="p-4">
//                       <div className="text-sm text-slate-600 max-w-md truncate">{ticket.text}</div>
//                     </td>
//                     <td className="p-4">
//                       <button className="bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1 rounded-lg shadow-sm text-slate-700 flex items-center gap-1 text-xs font-bold transition-all">
//                         <ExternalLink size={12} /> Обработать
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {filteredTickets.length === 0 && (
//               <div className="p-20 text-center flex flex-col items-center gap-3">
//                 <Search size={40} className="text-slate-200" />
//                 <p className="text-slate-400">Писем с такими фильтрами не найдено</p>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { 
  User, Mail, Tag, Database, ShieldAlert, Package, 
  RefreshCcw, Handshake, ExternalLink, AlertTriangle, 
  Info, AlertCircle, Eye, EyeOff, CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showAnswered, setShowAnswered] = useState(false); // Состояние для показа отвеченных

  // База данных с добавленным полем isAnswered
  const [tickets, setTickets] = useState([
    { id: 1, customer: "Иван Иванов", subject: "Не подошел размер", category: "Возврат товара", priority: "Средний", date: "10:25", text: "Здравствуйте, хочу вернуть кроссовки, не подошел размер. Номер заказа 5541.", isAnswered: false },
    { id: 2, customer: "TechStore", subject: "Предложение о поставках", category: "Сотрудничество", priority: "Неважно", date: "11:10", text: "Добрый день! Мы хотим предложить вам оптовые поставки комплектующих.", isAnswered: false },
    { id: 3, customer: "Анна Сидорова", subject: "Где моя посылка?", category: "Проблемы с заказом", priority: "Средний", date: "11:45", text: "Заказ №992. Жду уже неделю, трек-номер не обновляется!", isAnswered: false },
    { id: 4, customer: "Аноним", subject: "Ждите проблем", category: "Угрозы", priority: "Высокая", date: "12:00", text: "Если вы не ответите сейчас же, я напишу жалобу во все инстанции!", isAnswered: false },
    { id: 5, customer: "Дмитрий К.", subject: "Срочно! Отмена", category: "Проблемы с заказом", priority: "Высокая", date: "12:15", text: "ОШИБСЯ В АДРЕСЕ! Срочно отмените заказ 1002, пока не отправили!", isAnswered: false },
  ]);

  // Функция "обработки" (ответа на письмо)
  const handleAnswer = (id) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, isAnswered: true } : t));
  };

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

  // Комплексная логика фильтрации
  const filteredTickets = tickets.filter(t => {
    const matchCat = categoryFilter === 'all' || t.category === categoryFilter;
    const matchPri = priorityFilter === 'all' || t.priority === priorityFilter;
    const matchStatus = showAnswered || !t.isAnswered; // Если showAnswered выключен, скрываем отвеченные
    return matchCat && matchPri && matchStatus;
  });

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar */}
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
            
            {/* Кнопка переключения архива */}
            <button 
              onClick={() => setShowAnswered(!showAnswered)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border ${showAnswered ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-600'}`}
            >
              {showAnswered ? <Eye size={16}/> : <EyeOff size={16}/>}
              {showAnswered ? "Скрыть отвеченные" : "Показать все (вкл. архив)"}
            </button>
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
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase w-32">Приоритет</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Тема / Категория</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Отправитель</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Текст письма</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase text-center">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredTickets.map(ticket => (
                  <tr key={ticket.id} className={`transition-all ${ticket.isAnswered ? 'opacity-50 grayscale bg-slate-50' : 'hover:bg-blue-50/30'}`}>
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