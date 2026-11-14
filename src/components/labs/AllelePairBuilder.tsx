import { useState } from 'react';
import { FlaskConical } from 'lucide-react';
import {
  MONOHYBRID_TRAITS,
  formatPair,
  getMonoGenotypeClass,
  getMonoPhenotype,
} from '../../utils/genetics';

export function AllelePairBuilder() {
  const [traitIdx, setTraitIdx] = useState(0);
  const trait = MONOHYBRID_TRAITS[traitIdx];

  const [maternalAllele, setMaternalAllele] = useState<string>(trait.dominantLetter);
  const [paternalAllele, setPaternalAllele] = useState<string>(trait.recessiveLetter);

  const handleSelectTrait = (idx: number) => {
    const next = MONOHYBRID_TRAITS[idx];
    setTraitIdx(idx);
    setMaternalAllele(next.dominantLetter);
    setPaternalAllele(next.recessiveLetter);
  };

  const genotype = formatPair(maternalAllele, paternalAllele, trait.dominantLetter);
  const classification = getMonoGenotypeClass(genotype, trait);
  const phenotype = getMonoPhenotype(genotype, trait);
  const hasDominant = genotype.includes(trait.dominantLetter);
  const domCount =
    (maternalAllele === trait.dominantLetter ? 1 : 0) +
    (paternalAllele === trait.dominantLetter ? 1 : 0);

  const enzymeWidth = domCount === 2 ? '100%' : domCount === 1 ? '65%' : '15%';
  const enzymeText =
    domCount === 2
      ? '2 Working Alleles → Maximum Enzyme & Hormone'
      : domCount === 1
      ? '1 Working Allele → Enough Enzyme for Dominant Trait!'
      : '0 Working Alleles → Low/Inactive Enzyme → Recessive Trait Appears';

  return (
    <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 to-white p-4 sm:p-6 dark:border-indigo-900/60 dark:from-slate-900 dark:to-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <FlaskConical className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Chromosome &amp; Allele Pair Explorer
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Toggle the allele inherited from each parent at the exact same gene locus
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {MONOHYBRID_TRAITS.slice(0, 3).map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => handleSelectTrait(i)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                i === traitIdx
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              {t.character.replace(' (NCERT Standard)', '')} ({t.dominantLetter}/{t.recessiveLetter})
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-12 items-center">
        {/* Controls & Homologous Chromosomes */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Maternal */}
            <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 dark:border-sky-900 dark:bg-sky-950/30">
              <div className="text-xs font-bold uppercase tracking-wide text-sky-800 dark:text-sky-300 mb-2">
                Maternal Chromosome
              </div>
              <div className="flex gap-2">
                {[trait.dominantLetter, trait.recessiveLetter].map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setMaternalAllele(letter)}
                    className={`flex-1 rounded-lg py-2 font-mono text-base font-bold transition cursor-pointer ${
                      maternalAllele === letter
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-sky-200 hover:bg-sky-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                {maternalAllele === trait.dominantLetter
                  ? `Dominant (${trait.dominantLabel})`
                  : `Recessive (${trait.recessiveLabel})`}
              </p>
            </div>

            {/* Paternal */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 dark:border-amber-900 dark:bg-amber-950/30">
              <div className="text-xs font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300 mb-2">
                Paternal Chromosome
              </div>
              <div className="flex gap-2">
                {[trait.dominantLetter, trait.recessiveLetter].map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setPaternalAllele(letter)}
                    className={`flex-1 rounded-lg py-2 font-mono text-base font-bold transition cursor-pointer ${
                      paternalAllele === letter
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-amber-200 hover:bg-amber-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                {paternalAllele === trait.dominantLetter
                  ? `Dominant (${trait.dominantLabel})`
                  : `Recessive (${trait.recessiveLabel})`}
              </p>
            </div>
          </div>

          {/* Visual Homologous Pair */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="text-xs font-semibold text-slate-500 text-center mb-2">
              Same Gene Locus on Homologous Chromosome Pair
            </div>
            <div className="flex items-center justify-center gap-10">
              {[
                { label: 'From Mother', allele: maternalAllele, base: 'bg-sky-100 border-sky-400' },
                { label: 'From Father', allele: paternalAllele, base: 'bg-amber-100 border-amber-400' },
              ].map((chr) => {
                const isDom = chr.allele === trait.dominantLetter;
                return (
                  <div key={chr.label} className="flex flex-col items-center">
                    <div
                      key={`${chr.label}-${chr.allele}`}
                      className={`w-10 h-28 rounded-full border-2 ${chr.base} flex flex-col items-center justify-center relative dark:bg-slate-800 animate-pop-in`}
                    >
                      <div
                        className={`w-full py-1.5 text-center font-mono text-sm font-extrabold text-white transition-colors duration-300 ${
                          isDom ? 'bg-teal-600' : 'bg-slate-500'
                        }`}
                      >
                        {chr.allele}
                      </div>
                    </div>
                    <span className="mt-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {chr.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Output Panel */}
        <div className="lg:col-span-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Genotype (Letter Code)
              </div>
              <div className="mt-1 font-mono text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">
                {genotype}
              </div>
              <div className="mt-1 inline-block rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                {classification}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Phenotype (Visible Trait)
              </div>
              <div
                className={`mt-1 text-2xl font-extrabold ${
                  hasDominant
                    ? 'text-teal-700 dark:text-teal-400'
                    : 'text-amber-700 dark:text-amber-400'
                }`}
              >
                {phenotype}
              </div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {hasDominant ? 'Dominant expression' : 'Recessive expression'}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              <span>Functional Enzyme / Protein Level</span>
              <span className="font-mono">{domCount}/2 working alleles</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  domCount > 0 ? 'bg-teal-600' : 'bg-amber-500'
                }`}
                style={{ width: enzymeWidth }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{enzymeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
