function Footer() {
  const currentDate = Date.now();
  const currentYear = new Date(currentDate);

  return (
    <footer className="my-6">
      <p>@{currentYear.getFullYear()} by Ali Fadel</p>
    </footer>
  );
}

export default Footer;
