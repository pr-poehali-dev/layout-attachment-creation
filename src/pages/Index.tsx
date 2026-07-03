import Icon from '@/components/ui/icon';

const HERO_IMAGE =
  'https://cdn.poehali.dev/projects/a9037679-f96a-485d-8bbb-1ba87346ebce/bucket/8ad8a2e5-05ab-4559-ae1d-164bea8d4516.png';
const HERO_BG =
  'https://cdn.poehali.dev/projects/a9037679-f96a-485d-8bbb-1ba87346ebce/files/c8908ad4-215d-4f6c-8da7-1bd7c1932c31.jpg';

interface Product {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    title: 'Матрица энергетической реальности',
    description: 'Как чакры, тонкие тела и код судьбы влияют на вашу жизнь',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/6413d861-9e1c-470b-93e7-e97415094c8d.jpg',
  },
  {
    title: 'Жизнь без паники',
    description:
      'Панические атаки, тревоги, страхи. Вы не сходите с ума. Вы застряли в конфликте, который тело пытается решить',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/6413d861-9e1c-470b-93e7-e97415094c8d.jpg',
  },
  {
    title: 'Женские диагнозы',
    subtitle: 'Исцеление через осознание',
    description: 'Врачи ставят диагнозы, а тело продолжает болеть. Таблетки не лечат душу!',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/6413d861-9e1c-470b-93e7-e97415094c8d.jpg',
  },
  {
    title: 'Формула стройности',
    subtitle: 'Перезагрузка за два месяца',
    description: 'Три уровня стройности: физика, психосоматика, энергетика',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/964f7124-be32-4889-9c2a-23d6f62c89ea.jpg',
  },
  {
    title: 'Практика-медитация',
    subtitle: 'для проработки любого симптома',
    description: 'Поиск и работа с первопричиной симптома',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/964f7124-be32-4889-9c2a-23d6f62c89ea.jpg',
  },
  {
    title: 'ПАРАЗИТам.НЕТ',
    subtitle: 'Маршрут, по которому я вышла из ада',
    description: 'Как паразиты влияют на нашу жизнь и здоровье',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/964f7124-be32-4889-9c2a-23d6f62c89ea.jpg',
  },
  {
    title: 'Все практики — медитации',
    description: 'Полная библиотека медитативных практик',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/137bf99f-5e03-4326-b721-e178401ebedb.jpg',
  },
  {
    title: 'Обучение космоэнергетике',
    description: 'Школа современной космоэнергетики и личного творения',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/137bf99f-5e03-4326-b721-e178401ebedb.jpg',
  },
  {
    title: 'Клуб АУРА',
    description: 'Общество, где мы каждый день творим свою лучшую жизнь',
    image:
      'https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/137bf99f-5e03-4326-b721-e178401ebedb.jpg',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#efe7db] via-[#f3ede2] to-[#e7ddce]" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-stretch min-h-[85vh] py-12">
          <div className="order-2 md:order-1 animate-float-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-6 text-secondary">
              <Icon name="Sparkles" size={18} />
              <span className="text-sm tracking-widest uppercase font-medium">
                Библиотека полезных продуктов
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              <span className="text-secondary">Всё, о чём вы меня часто</span>{' '}
              <span className="text-foreground">спрашиваете,</span>{' '}
              <span className="text-primary">я максимально упаковала</span>{' '}
              <span className="text-secondary">в полезные продукты</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8">
              <span className="text-secondary font-semibold">Библиотека</span> постоянно
              пополняется — практики, медитации, обучение и клуб единомышленников.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-medium transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
                Смотреть каталог
                <Icon
                  name="ArrowDown"
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </button>

              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 border-primary/40 text-primary text-[9px] font-semibold text-center leading-tight animate-gentle-float">
                <Icon name="Heart" size={16} className="text-accent fill-accent mb-0.5" />
                Сделано с любовью
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative animate-float-up md:h-full flex items-end justify-center md:overflow-visible">
            <div className="relative mx-auto max-w-lg md:max-w-none h-[480px] md:h-full md:max-h-[760px] w-full md:w-[125%] flex items-end justify-center">
              <div className="absolute bottom-0 w-4/5 h-2/3 rounded-full bg-secondary/10 blur-2xl" />
              <img
                src={HERO_IMAGE}
                alt="Автор библиотеки"
                className="relative h-full w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm tracking-widest uppercase text-secondary font-medium">
              Каталог
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3">
              Продукты для тела, души и энергии
            </h2>
            <div className="w-16 h-1 rounded-full bg-accent mx-auto mt-6" />
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {products.map((product, i) => (
              <article
                key={product.title}
                className="group relative flex flex-col sm:flex-row items-stretch gap-6 rounded-[1.75rem] bg-card border-2 border-primary/40 p-4 sm:p-6 transition-all duration-300 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-float-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="shrink-0 w-full sm:w-40 h-40 rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center pr-2">
                  <h3 className="font-heading font-extrabold text-xl md:text-2xl text-secondary leading-tight">
                    {product.title}
                    {product.subtitle && (
                      <span className="block text-foreground">{product.subtitle}</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <button className="absolute bottom-5 right-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                  подробнее
                  <Icon
                    name="ArrowRight"
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground px-8 py-16 text-center">
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent/10" />
            <Icon name="Sparkles" size={32} className="mx-auto mb-5 text-accent" />
            <h2 className="font-display text-4xl md:text-5xl mb-4 relative">
              Начните путь к себе сегодня
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 relative">
              Выберите продукт, который откликается — и сделайте первый шаг к здоровью и внутренней
              гармонии.
            </p>
            <button className="relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-accent-foreground font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Выбрать продукт
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="container mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={16} className="text-accent fill-accent" />
            <span className="font-display text-lg text-secondary">Сделано с любовью</span>
          </div>
          <p>© {new Date().getFullYear()} Библиотека полезных продуктов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;