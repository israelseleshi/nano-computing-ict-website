type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 py-20 md:py-24">
      <div className="container text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl font-headline">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
