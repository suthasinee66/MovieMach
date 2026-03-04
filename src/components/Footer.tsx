const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border px-6 md:px-12 py-12 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h4 className="font-display text-lg text-primary mb-4 tracking-wide">Movie</h4>
          <ul className="space-y-2">
            {["Action", "Comedy", "Horror", "Animation", "Fantasy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary mb-4 tracking-wide">Series</h4>
          <ul className="space-y-2">
            {["Reality Shows", "Classic Shows", "Valentine Day", "Comedy", "Fantasy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary mb-4 tracking-wide">Support</h4>
          <ul className="space-y-2">
            {["General Info", "Privacy Policy", "Terms of Service", "Help Center"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-primary mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">support@movies.com</li>
            <li className="text-sm text-muted-foreground">Tel: 0198872337</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 Movie Love. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
