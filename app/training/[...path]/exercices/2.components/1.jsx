export default function App() {
  return (
    <ShoesList>
      <ShoeCard
        isNew
        src="/images/shoes-1.png"
        name="Shark Shoes"
        description="This yellow shoes will make your friend jealous."
      />
      <ShoeCard
        isNew
        src="/images/shoes-2.png"
        name="Blue Wheti"
        description="You can wear this shoes with any clothes. It will make you look cool."
      />
      <ShoeCard
        src="/images/shoes-3.png"
        name="Basic Fit"
        description=" You know what? This shoes is the best shoes for you who like to
        walk."
      />
      <ShoeCard
        src="/images/shoes-4.png"
        name="Darku Shoes"
        description="Wow, this shoes is so cool. You can wear it for any occasion."
      />
    </ShoesList>
  );
}

function ShoesList({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
}

function ShoeCard({ src, name, description, isNew = false }) {
  return (
    <div className="card w-full bg-base-300 shadow-xl">
      <figure>
        <img
          src={src}
          className="h-32 w-full object-cover object-center"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {isNew ? <NewBadge /> : null}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function NewBadge() {
  return <div className="badge badge-secondary">NEW</div>;
}
