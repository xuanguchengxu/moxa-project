import type { Product } from "@/data/products";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:shadow-card">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src="/images/product-moxa.jpg"
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        {/* Badge */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Moxa Supply
            </p>
            <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">
              {product.name}
            </h2>
          </div>
        </div>
        
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-6 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Use Case
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {product.use}
              </p>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
