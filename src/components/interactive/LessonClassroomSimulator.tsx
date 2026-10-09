import React, { useState } from 'react';
import { LayoutGrid, Layers, Gamepad2, Volume2, Sparkles, Check, RefreshCw, ArrowRight, BookOpen, ChevronDown } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const LessonClassroomSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'board' | 'cards' | 'puzzle' | 'materials'>('board');
  const [isMobileInteractiveOpen, setIsMobileInteractiveOpen] = useState(false);
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = useState(false);

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const sampleCards = [
    { word: "Friendly", translation: "Дружелюбный", example: "Victoria is a friendly teacher.", icon: "😊" },
    { word: "Confidence", translation: "Уверенность", example: "I speak English with confidence.", icon: "🌟" },
    { word: "Journey", translation: "Путешествие / Путь", example: "Learning English is an exciting journey.", icon: "✈️" },
    { word: "Success", translation: "Успех / Результат", example: "Practice leads to great success.", icon: "🏆" }
  ];

  // Sentence puzzle state
  const [puzzleWords, setPuzzleWords] = useState<string[]>(["English", "is", "fun", "and", "easy", "with", "system"]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [puzzleSuccess, setPuzzleSuccess] = useState<boolean | null>(null);

  const targetSentence = "English is fun and easy with system";

  const handleWordClick = (word: string, index: number) => {
    setSelectedWords(prev => [...prev, word]);
    setPuzzleWords(prev => prev.filter((_, i) => i !== index));
    setPuzzleSuccess(null);
  };

  const handleRemoveSelectedWord = (word: string, index: number) => {
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setPuzzleWords(prev => [...prev, word]);
    setPuzzleSuccess(null);
  };

  const checkPuzzle = () => {
    if (selectedWords.join(" ") === targetSentence) {
      setPuzzleSuccess(true);
    } else {
      setPuzzleSuccess(false);
    }
  };

  const resetPuzzle = () => {
    setPuzzleWords(["English", "is", "fun", "and", "easy", "with", "system"]);
    setSelectedWords([]);
    setPuzzleSuccess(null);
  };

  // Reusable Full Simulator Card Component
  const renderSimulatorCard = () => (
    <Card variant="white" className="border-purple-200/80 shadow-lg overflow-hidden p-0">
      {/* Top Header bar simulating an online classroom app */}
      <div className="bg-slate-900 text-white p-3.5 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
            Classroom Simulator • Виктория Славоладова
          </span>
        </div>

        <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-2xl border border-slate-700/60 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('board')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'board' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Интерактивная онлайн-доска</span>
          </button>

          <button
            onClick={() => setActiveTab('cards')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'cards' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Флеш-карточки</span>
          </button>

          <button
            onClick={() => setActiveTab('puzzle')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'puzzle' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Пазл предложений</span>
          </button>

          <button
            onClick={() => setActiveTab('materials')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'materials' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Авторские пособия</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-4 sm:p-6 md:p-8 bg-slate-50/50 min-h-[360px] flex flex-col justify-center">
        
        {/* TAB 1: MIRO BOARD PREVIEW */}
        {activeTab === 'board' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
                  <span>Интерактивное рабочее пространство урока</span>
                  <Badge variant="purple" size="sm">Интерактивный класс</Badge>
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Так выглядит доска во время урока: яркие схемы, цветовые блоки и визуальная логика вместо сухих правил.
                </p>
              </div>
            </div>

            {/* Miro Board Canvas Mockup */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-dashed border-purple-200 shadow-inner space-y-6 relative overflow-hidden">
              <div className="absolute top-2 right-3 text-[10px] font-mono text-slate-400">
                Онлайн-связь: 100% • Sync Active
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Present Simple Block */}
                <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 space-y-2 shadow-sm">
                  <div className="font-heading font-bold text-purple-900 text-xs sm:text-sm flex items-center justify-between">
                    <span>Subject + Verb(s)</span>
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <div className="bg-white p-2.5 rounded-xl text-xs font-semibold text-slate-800 border border-purple-100">
                    I <span className="text-purple-700 underline font-bold">read</span> English books every day.
                  </div>
                  <div className="text-[11px] text-purple-800 font-medium italic">
                    Регулярное действие / Привычка
                  </div>
                </div>

                {/* Present Continuous Block */}
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2 shadow-sm">
                  <div className="font-heading font-bold text-amber-900 text-xs sm:text-sm flex items-center justify-between">
                    <span>Subject + am/is/are + V-ing</span>
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                  </div>
                  <div className="bg-white p-2.5 rounded-xl text-xs font-semibold text-slate-800 border border-amber-100">
                    She <span className="text-amber-700 underline font-bold">is learning</span> rules right now!
                  </div>
                  <div className="text-[11px] text-amber-800 font-medium italic">
                    Происходит прямо сейчас
                  </div>
                </div>

                {/* Teacher's Tip Block */}
                <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 space-y-2 shadow-xs">
                  <div className="font-heading font-bold text-rose-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Подсказка преподавателя</span>
                  </div>
                  <p className="text-xs text-rose-900 font-medium leading-relaxed">
                    «Обрати внимание на слова-маркеры: <strong>always, usually</strong> — это Simple; а <strong>now, at the moment</strong> — Continuous!»
                  </p>
                </div>
              </div>

              <div className="p-3 bg-purple-900 text-white rounded-xl text-xs flex flex-wrap items-center justify-between gap-2">
                <span className="font-medium">Задание урока: Нажмите на правильный маркер времени в диалоге!</span>
                <span className="bg-purple-700 px-2.5 py-1 rounded-lg font-bold">Ученик у доски</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FLASHCARDS INTERACTIVE GAME */}
        {activeTab === 'cards' && (
          <div className="space-y-6 max-w-xl mx-auto w-full text-center">
            <div>
              <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Авторские карточки слов
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Нажмите на карточку, чтобы перевернуть ее и проверить перевод.
              </p>
            </div>

            {/* Interactive Card */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`w-full h-56 rounded-3xl p-6 sm:p-8 border-2 cursor-pointer transition-all duration-500 flex flex-col items-center justify-center shadow-lg relative ${
                isFlipped
                  ? 'bg-purple-900 text-white border-purple-700 rotate-y-180'
                  : 'bg-white text-slate-900 border-purple-200 hover:border-purple-400'
              }`}
            >
              <div className="text-4xl mb-3">{sampleCards[currentCardIndex].icon}</div>

              {!isFlipped ? (
                <div>
                  <div className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">
                    English Word
                  </div>
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                    {sampleCards[currentCardIndex].word}
                  </div>
                  <div className="text-xs text-slate-400 mt-3 font-medium">
                    (Нажмите, чтобы открыть перевод)
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-1">
                    Перевод и пример
                  </div>
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-purple-200">
                    {sampleCards[currentCardIndex].translation}
                  </div>
                  <div className="text-xs text-purple-200/90 mt-3 italic">
                    «{sampleCards[currentCardIndex].example}»
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : sampleCards.length - 1));
                  setIsFlipped(false);
                }}
              >
                Назад
              </Button>

              <span className="text-xs font-semibold text-slate-500">
                Карточка {currentCardIndex + 1} из {sampleCards.length}
              </span>

              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setCurrentCardIndex((prev) => (prev < sampleCards.length - 1 ? prev + 1 : 0));
                  setIsFlipped(false);
                }}
              >
                Следующая
              </Button>
            </div>
          </div>
        )}

        {/* TAB 3: SENTENCE PUZZLE */}
        {activeTab === 'puzzle' && (
          <div className="space-y-6 max-w-xl mx-auto w-full">
            <div className="text-center">
              <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Пазл английского предложения
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Составьте правильное предложение: «Английский — это весело и легко с системой»
              </p>
            </div>

            {/* Answer Slots */}
            <div className="min-h-[70px] bg-white p-3 sm:p-4 rounded-2xl border-2 border-purple-200 flex flex-wrap items-center gap-2 justify-center shadow-inner">
              {selectedWords.length === 0 ? (
                <span className="text-xs text-slate-400 italic">Нажимайте на слова ниже, чтобы собрать предложение</span>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    onClick={() => handleRemoveSelectedWord(word, idx)}
                    className="px-3 py-1.5 bg-purple-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:bg-rose-600 transition-colors cursor-pointer"
                  >
                    {word} ×
                  </button>
                ))
              )}
            </div>

            {/* Available Words Pool */}
            <div className="flex flex-wrap items-center gap-2 justify-center p-2">
              {puzzleWords.map((word, idx) => (
                <button
                  key={`${word}-${idx}`}
                  onClick={() => handleWordClick(word, idx)}
                  className="px-3.5 py-2 bg-slate-200 hover:bg-purple-100 text-slate-800 hover:text-purple-900 font-semibold text-xs sm:text-sm rounded-xl border border-slate-300 transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  {word}
                </button>
              ))}
            </div>

            {/* Verification State */}
            {puzzleSuccess !== null && (
              <div className={`p-4 rounded-2xl text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 ${
                puzzleSuccess ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-rose-100 text-rose-900 border border-rose-300'
              }`}>
                {puzzleSuccess ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Отлично! Предложение составлено идеально. Так же системно мы работаем на уроках!</span>
                  </>
                ) : (
                  <span>Попробуйте еще раз или нажмите кнопку Сброс</span>
                )}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={resetPuzzle} icon={<RefreshCw className="w-4 h-4" />}>
                Сброс
              </Button>
              <Button variant="primary" size="sm" onClick={checkPuzzle} disabled={selectedWords.length === 0}>
                Проверить ответ
              </Button>
            </div>
          </div>
        )}

        {/* TAB 4: MATERIALS */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <h4 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Авторские обучающие материалы
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Все учебные файлы, аудиозаписи и рабочие листы разработаны и адаптированы мной специально под учебные программы.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-slate-900 text-sm">
                    Наглядные памятки и правила чтения
                  </h5>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Наглядная карточная система для начальной школы. Буквы оживают в ассоциациях.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                    PDF рабочей тетради
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-slate-900 text-sm">
                    Аудиогид по произношению
                  </h5>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Мои короткие аудиоподсказки для отработки правильных интонаций дома.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                    Мои авторские аудиофайлы
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Card>
  );

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* A. MOBILE COMPACT PREVIEW (< md)                         */}
      {/* ======================================================== */}
      <div className="md:hidden space-y-3">
        <div className="bg-white rounded-3xl border-2 border-purple-200/90 shadow-md p-4 sm:p-5 space-y-3 relative overflow-hidden">
          
          {/* Top Bar simulating app header */}
          <div className="flex items-center justify-between gap-2 border-b border-purple-100 pb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-slate-400 ml-1.5">Classroom</span>
            </div>
            <Badge variant="purple" size="sm">Интерактивный класс</Badge>
          </div>

          {/* Title & Short Description */}
          <div className="space-y-1">
            <h3 className="font-heading font-extrabold text-slate-900 text-base leading-snug">
              Интерактивное рабочее пространство урока
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Так выглядит доска во время урока: яркие схемы, цветовые блоки и визуальная логика вместо сухих правил.
            </p>
          </div>

          {/* Visual Preview (Unskewed, natural aspect ratio key snippet of the board) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-purple-50/70 via-slate-50 to-white border border-purple-200/80 p-3 space-y-2 overflow-hidden shadow-2xs">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-purple-100/80 pb-1">
              <span>Онлайн-связь: 100% • Sync Active</span>
              <span className="text-purple-700 font-bold">Ученик у доски</span>
            </div>

            {/* Present Simple Snippet */}
            <div className="bg-white p-2.5 rounded-xl border border-purple-200 shadow-2xs space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-purple-900">
                <span>Subject + Verb(s)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              </div>
              <div className="text-xs font-semibold text-slate-800">
                I <span className="text-purple-700 underline font-bold">read</span> English books every day.
              </div>
              <div className="text-[10px] text-purple-700 italic">
                Регулярное действие / Привычка
              </div>
            </div>

            {/* Present Continuous Snippet */}
            <div className="bg-white p-2.5 rounded-xl border border-amber-200 shadow-2xs space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                <span>Subject + am/is/are + V-ing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              <div className="text-xs font-semibold text-slate-800">
                She <span className="text-amber-700 underline font-bold">is learning</span> rules right now!
              </div>
              <div className="text-[10px] text-amber-700 italic">
                Происходит прямо сейчас
              </div>
            </div>

            {/* Fade scrim overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
          </div>

          {/* Action CTA: «Попробовать тренажёр →» */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsMobileInteractiveOpen(!isMobileInteractiveOpen)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm rounded-2xl shadow-sm transition-all cursor-pointer"
            >
              <span>{isMobileInteractiveOpen ? 'Свернуть тренажёр' : 'Попробовать тренажёр'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isMobileInteractiveOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Expandable «Подробнее о тренажёре ▾» */}
          <div className="pt-0.5 text-center">
            <button
              type="button"
              onClick={() => setIsMobileDetailsOpen(!isMobileDetailsOpen)}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors py-1 cursor-pointer select-none"
            >
              <span>{isMobileDetailsOpen ? 'Свернуть описание' : 'Подробнее о тренажёре'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileDetailsOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Details Accordion */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isMobileDetailsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden min-h-0">
              <div className="pt-2.5 pb-1 border-t border-purple-100 space-y-2 text-xs text-slate-600">
                <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1.5">
                  <span className="font-heading font-bold text-purple-950 block">4 интерактивных режима:</span>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                      <span><strong>Интерактивная онлайн-доска:</strong> живые схемы и визуальные блоки вместо зубрежки</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                      <span><strong>Флеш-карточки:</strong> интерактивная проверка слов с примерами</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                      <span><strong>Пазл предложений:</strong> сборка правильных английских конструкций</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                      <span><strong>Авторские пособия:</strong> памятки правил и аудиогиды</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full Interactive Simulator on Mobile (when active) */}
        {isMobileInteractiveOpen && (
          <div className="pt-1 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-xs font-bold text-purple-900">Интерактивный тренажёр открыт</span>
              <button
                type="button"
                onClick={() => setIsMobileInteractiveOpen(false)}
                className="text-xs font-bold text-purple-700 hover:text-purple-900 underline cursor-pointer"
              >
                Свернуть
              </button>
            </div>
            {renderSimulatorCard()}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* B. DESKTOP VIEW (md: and above, 100% original full card)  */}
      {/* ======================================================== */}
      <div className="hidden md:block">
        {renderSimulatorCard()}
      </div>
    </div>
  );
};
