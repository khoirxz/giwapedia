const Footer: React.FC = () => {
  return (
    <div className="my-5 p-2 border-t border-black/15">
      <div className="max-w-7xl mx-auto mt-5 text-center">
        <div>
          <h1 className="font-heading text-2xl font-bold text-primary">
            Giwapedia
          </h1>
          <p className="font-body text-secondary">
            Solusi untuk semua kebutuhan sosial media kamu.
          </p>
          <p className="font-body text-secondary my-3">
            &copy; {new Date().getFullYear()} - icon by{" "}
            <a href="https://icons8.com/">icons8</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
