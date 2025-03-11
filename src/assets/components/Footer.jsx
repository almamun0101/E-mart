function Footer() {
  return (
    <>
      <div className="bg-sec-500 p-10 mt-10">
        <div className="container ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="">
              <h2 className="font-bold text-xl py-3">About</h2>
              <h3>Who we are?</h3>
              <h3>Privacy Policy</h3>
            </div>
            <div className="">
              <h2 className="font-bold text-xl py-3">HELP</h2>
              <h3>Support</h3>
              <h3>Help Center</h3>
            </div>
            <div className="">
              <h2 className="font-bold text-xl py-3">CONTACT</h2>
              <h3>Terms & Condition </h3>
              <h3>Return & Exchange Policy</h3>
            </div>
            <div className="">
              <h2 className="font-bold text-large py-3">FOLLOW US</h2>
              <h3>Facebook</h3>
              <h3>Instagram</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
