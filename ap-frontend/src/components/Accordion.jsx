import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ title, content, index }) => {
  // Format index to be 01, 02, etc.
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <Disclosure as="div" className="border-b border-[var(--color-dark-border)] first:border-t" defaultOpen={index === 0}  >
      {({ open }) => (
        <>
          <DisclosureButton className="w-full py-8 flex items-start md:items-center justify-between text-left focus:outline-none group">
            <div className="flex items-start md:items-center gap-6 md:gap-12">
              {/* Number (01, 02...) */}
              <span className="text-lg md:text-xl font-medium text-[var(--color-dark-text-secondary)] inter-light">
                {formattedIndex}
              </span>
              
              {/* Title */}
              <span 
                className={`
                  text-xl md:text-3xl font-bold montserrat-medium tracking-tight transition-colors duration-300
                  ${open 
                    ? 'text-[var(--color-dark-text-primary)]' 
                    : 'text-[var(--color-dark-text-primary)] group-hover:text-[var(--color-dark-accent-primary)]'
                  }
                `}
              >
                {title}
              </span>
            </div>

            {/* Icon (Plus / Minus) */}
            <div className="ml-4 flex-shrink-0 text-[var(--color-dark-text-primary)]">
              {open ? (
                <Minus className="w-6 h-6 md:w-8 md:h-8" />
              ) : (
                <Plus className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-90" />
              )}
            </div>
          </DisclosureButton>
          
          {/* SMOOTH ANIMATION WRAPPER 
            1. We use a grid layout to transition from 0fr to 1fr.
            2. We control opacity for a smoother fade-in/out effect.
          */}
          <div 
            className={`
              grid overflow-hidden transition-all duration-500 ease-in-out
              ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
            `}
          >
            {/* 'static' is crucial here. It forces the panel to stay rendered 
              so our CSS grid animation can hide it gracefully.
            */}
            <DisclosurePanel static className="overflow-hidden">
              {/* Content Wrapper
                We apply the padding HERE instead of on the Panel to avoid layout jumps.
              */}
              <div className="pb-8 pl-[3rem] md:pl-[4.3rem] pr-4 text-[var(--color-dark-text-secondary)] text-base md:text-lg leading-relaxed montserrat-regular">
                {content}
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;