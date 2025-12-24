type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 py-20 md:py-24">
      <div className="container text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl font-headline">
          {title}
        </h1>
      </div>
    </section>
  );
}
