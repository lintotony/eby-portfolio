import TranslateY from "../animations/TranslateY";

function Quote() {
  return (
    <section className="h-[100dvh] z-8 bg-secondary py-[2rem] lg:py-[3rem] flex items-center justify-center">
      <div className="w-full h-full border-y border-primary flex items-center justify-center p-[2rem] lg:px-[5rem]">
        <TranslateY>
          <div className="w-full flex items-center justify-center">
            <h1 className="lg:w-[60%] font-primary font-semibold text-primary text-header-sm text-center leading-[calc(1.3_*_var(--text-header-sm))]">
              “My journey isn’t about doing more, but creating better—
              <span className="font-secondary italic">
                deeper, truer, realer.
              </span>
              ”
            </h1>
          </div>
        </TranslateY>
      </div>
    </section>
  );
}

export default Quote;
