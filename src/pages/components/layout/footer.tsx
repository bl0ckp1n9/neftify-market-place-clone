export default function Footer() {
  return (
    <footer className="bg-blue-900">
      <div className="container grid grid-cols-4 gap-8 text-white  [&>div]:flex [&>div]:flex-col [&>:not(div:first-child)]:items-center [&_p]:text-gray-400 [&>div>div]:flex [&>div>div]:flex-col [&>div>div]:mt-3 [&>div>div]:gap-y-5">
        <div>
          <h6 className="text-left">Neftify</h6>
          <div>
            <p>
              Neftify is a unique and beautiful collection of UI elements that
              are all flexible and modular. A complete and customizable solution
              to building the website of your dreams.
            </p>
          </div>
        </div>
        <div>
          <h6>About us</h6>
          <div>
            <p>Explore</p>
            <p>Item</p>
            <p>Collection</p>
            <p>Connect</p>
          </div>
        </div>
        <div>
          <h6>Settings</h6>
          <div>
            <p>Explore</p>
            <p>Item</p>
            <p>Collection</p>
            <p>Connect</p>
          </div>
        </div>
        <div>
          <h6>Profile</h6>
          <div>
            <p>Explore</p>
            <p>Item</p>
            <p>Collection</p>
            <p>Connect</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
