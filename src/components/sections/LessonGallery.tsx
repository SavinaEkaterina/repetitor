import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Sparkles, Play, Video, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import lessonsContent from '../../content/lessons.json';

export type GalleryMedia =
  | {
      type: 'image';
      src: string;
      alt?: string;
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
      title?: string;
    };

export interface GalleryBlockItem {
  id: string;
  title: string;
  description?: string;
  media?: GalleryMedia[];
  images?: string[];
  src?: string;
  caption?: string;
}

export const LessonGallery: React.FC = () => {
  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const gallerySection = lessonsContent.gallerySection || {
    badge: 'Наглядно о занятиях',
    title: 'Посмотрите, как проходят уроки',
    subtitle: 'Нажмите на любую карточку, чтобы посмотреть материалы и видеофрагменты урока.',
    items: []
  };

  const blocks: GalleryBlockItem[] = (gallerySection.items as GalleryBlockItem[]) || [];

  const getBlockMedia = (block: GalleryBlockItem): GalleryMedia[] => {
    if (Array.isArray(block.media) && block.media.length > 0) {
      return block.media.slice(0, 10);
    }
    if (Array.isArray(block.images) && block.images.length > 0) {
      return block.images.slice(0, 10).map((s) => ({ type: 'image', src: s }));
    }
    if (block.src) {
      return [{ type: 'image', src: block.src }];
    }
    return [];
  };

  const handleOpenBlock = (blockIndex: number, mediaIndex = 0) => {
    setSelectedBlockIndex(blockIndex);
    setActiveMediaIndex(mediaIndex);
  };

  const handleClose = () => {
    setSelectedBlockIndex(null);
    setActiveMediaIndex(0);
  };

  const currentBlock = selectedBlockIndex !== null ? blocks[selectedBlockIndex] : null;
  const currentBlockMedia = currentBlock ? getBlockMedia(currentBlock) : [];

  const handlePrevMedia = useCallback(() => {
    if (currentBlockMedia.length <= 1) return;
    setActiveMediaIndex((prev) => (prev === 0 ? currentBlockMedia.length - 1 : prev - 1));
  }, [currentBlockMedia.length]);

  const handleNextMedia = useCallback(() => {
    if (currentBlockMedia.length <= 1) return;
    setActiveMediaIndex((prev) => (prev === currentBlockMedia.length - 1 ? 0 : prev + 1));
  }, [currentBlockMedia.length]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextMedia();
      } else {
        handlePrevMedia();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation & lock body scroll without scrollbar jump
  useEffect(() => {
    if (selectedBlockIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevMedia();
      } else if (e.key === 'ArrowRight') {
        handleNextMedia();
      }
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBlockIndex, handleNextMedia, handlePrevMedia]);

  const currentMediaItem = currentBlockMedia[activeMediaIndex] || null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
          {gallerySection.badge}
        </Badge>
        <h2 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl md:text-3xl tracking-tight">
          {gallerySection.title}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {gallerySection.subtitle}
        </p>
      </div>

      {/* 4 Block Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {blocks.map((block, blockIndex) => {
          const mediaList = getBlockMedia(block);
          const coverItem = mediaList[0] || null;

          // Format count label
          const totalCount = mediaList.length;
          const imageCount = mediaList.filter((m) => m.type === 'image').length;
          const videoCount = mediaList.filter((m) => m.type === 'video').length;

          let countBadgeText = `${totalCount} материалов`;
          if (videoCount === 0 && imageCount > 0) {
            countBadgeText = `${imageCount} ${imageCount === 1 ? 'фото' : imageCount < 5 ? 'фото' : 'фотографий'}`;
          } else if (imageCount === 0 && videoCount > 0) {
            countBadgeText = `${videoCount} ${videoCount === 1 ? 'видео' : 'видео'}`;
          }

          return (
            <div
              key={block.id || blockIndex}
              onClick={() => handleOpenBlock(blockIndex, 0)}
              role="button"
              tabIndex={0}
              aria-label={`Открыть материалы: ${block.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenBlock(blockIndex, 0);
                }
              }}
              className="group relative bg-white rounded-3xl border border-purple-200/80 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between space-y-4 cursor-pointer overflow-hidden"
            >
              {/* Top Block Info */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                    <h3 className="font-heading font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-purple-700 transition-colors">
                      {block.title}
                    </h3>
                  </div>
                  {totalCount > 0 && (
                    <span className="text-[10px] font-bold text-purple-800 bg-purple-100/90 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      {countBadgeText}
                    </span>
                  )}
                </div>
                {block.description && (
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {block.description}
                  </p>
                )}
              </div>

              {/* Single Large Cover Preview (media[0]) */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-purple-50/60 border border-purple-100 group-hover:border-purple-300 shadow-2xs transition-all flex items-center justify-center">
                {coverItem ? (
                  coverItem.type === 'video' ? (
                    <>
                      {coverItem.poster ? (
                        <img
                          src={coverItem.poster}
                          alt={coverItem.title || block.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-950 flex items-center justify-center">
                          <Video className="w-8 h-8 text-purple-300/80" />
                        </div>
                      )}

                      {/* Video Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-bold backdrop-blur-xs flex items-center gap-1 border border-white/20 z-10">
                        <Play className="w-2.5 h-2.5 fill-current text-purple-300" />
                        <span>Видео</span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-purple-950/25 group-hover:bg-purple-950/35 transition-colors flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-purple-600/90 text-white shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform pl-0.5 border border-white/30">
                          <Play className="w-5 h-5 fill-current" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={coverItem.src}
                        alt={coverItem.alt || block.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            const placeholder = target.parentElement.querySelector('.img-placeholder');
                            if (placeholder) placeholder.classList.remove('hidden');
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Fallback Placeholder */}
                      <div className="img-placeholder hidden absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50 flex flex-col items-center justify-center p-3 text-center">
                        <div className="w-10 h-10 rounded-xl bg-purple-200/80 text-purple-800 flex items-center justify-center mb-1.5 shadow-2xs">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-purple-950 leading-tight">
                          {block.title}
                        </span>
                        <span className="text-[11px] text-purple-700 font-semibold mt-1 bg-purple-200/60 px-2 py-0.5 rounded-full">
                          Нажмите для просмотра
                        </span>
                      </div>

                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-white/95 text-purple-900 shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <div className="text-xs text-slate-400">Нет материалов</div>
                )}
              </div>

              {/* Bottom Action Bar */}
              <div className="flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-2 border-t border-purple-100/80">
                <span>Посмотреть {coverItem?.type === 'video' ? 'видео' : 'материалы'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Multi-Media Modal */}
      {currentBlock && currentMediaItem && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={currentBlock.title}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col border border-purple-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0 pr-12">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                    Материалы занятия
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-purple-100 px-2 py-0.5 rounded-full">
                    {activeMediaIndex + 1} / {currentBlockMedia.length}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-snug truncate">
                  {currentBlock.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-2xl bg-slate-100 hover:bg-purple-100 active:bg-purple-200 text-slate-700 hover:text-purple-950 flex items-center justify-center transition-colors cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Закрыть модальное окно"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Modal Main Viewing Area with Left / Right Navigation */}
            <div className="relative flex-1 w-full overflow-hidden my-3 p-2 sm:p-4 rounded-2xl bg-slate-900/95 border border-slate-800 flex items-center justify-center min-h-[320px]">
              
              {/* Left Arrow Button (shown if > 1 media item) */}
              {currentBlockMedia.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevMedia}
                  className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/15 hover:bg-white/25 active:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20"
                  aria-label="Предыдущий материал"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Media Display: Image or HTML5 Video */}
              {currentMediaItem.type === 'video' ? (
                <video
                  key={currentMediaItem.src}
                  src={currentMediaItem.src}
                  poster={currentMediaItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-auto max-w-full max-h-[60vh] rounded-lg shadow-lg mx-auto block"
                >
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              ) : (
                <img
                  key={currentMediaItem.src}
                  src={currentMediaItem.src}
                  alt={currentMediaItem.alt || `${currentBlock.title} — ${activeMediaIndex + 1}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const placeholder = target.parentElement.querySelector('.modal-img-placeholder');
                      if (placeholder) placeholder.classList.remove('hidden');
                    }
                  }}
                  className="w-auto max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg mx-auto block transition-all"
                />
              )}

              {/* Fallback inside Modal if image or video is not uploaded yet */}
              <div className="modal-img-placeholder hidden text-center space-y-3 p-6 text-white max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-purple-800/60 text-purple-200 flex items-center justify-center mx-auto border border-purple-600/40">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  {currentBlock.title} ({activeMediaIndex + 1} из {currentBlockMedia.length})
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentBlock.caption || currentBlock.description}
                </p>
                <p className="text-[11px] text-purple-300 pt-1">
                  Файл можно загрузить по адресу: <code className="bg-purple-950 px-2 py-0.5 rounded text-purple-200">{currentMediaItem.src}</code>
                </p>
              </div>

              {/* Right Arrow Button (shown if > 1 media item) */}
              {currentBlockMedia.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextMedia}
                  className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/15 hover:bg-white/25 active:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20"
                  aria-label="Следующий материал"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Thumbnail Dot / Index Navigation (if > 1 media item) */}
            {currentBlockMedia.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 pb-2">
                {currentBlockMedia.map((m, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`transition-all rounded-full cursor-pointer flex items-center justify-center ${
                      activeMediaIndex === idx
                        ? 'w-6 h-2 bg-purple-700'
                        : 'w-2 h-2 bg-slate-200 hover:bg-purple-300'
                    }`}
                    aria-label={`Перейти к файлу ${idx + 1}`}
                  >
                    {m.type === 'video' && activeMediaIndex !== idx && (
                      <span className="sr-only">Видео</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Modal Footer Description */}
            <div className="text-center pt-2 border-t border-slate-100 shrink-0">
              <p className="text-xs sm:text-sm text-slate-600">
                {currentBlock.caption || currentBlock.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
