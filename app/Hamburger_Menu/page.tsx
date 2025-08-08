export default function HamburgerMenuPage() {
  return (
    <div>
      <style>
        {`
          @keyframes wiggle {
            0% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
            100% { transform: rotate(-2deg); }
          }

          .wiggle {
            animation: wiggle 1.5s infinite ease-in-out;
          }
        `}
      </style>

      <h1 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
        <b>Hamburger Menu</b>
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '20px',
        }}
      >
        {/* Left Half of Menu */}
        <div style={{ flex: 1, paddingRight: '40px', marginTop: '2%' }}>
          {/* Specials */}
          <h2><u>Specials</u></h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Hot Honey Chicken Burger</span>
              <span>$19.99</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Hot Honey Chicken Bites</span>
              <span>$18.00</span>
            </div>
          </div>
          <br />

          {/* Burgers */}
          <h2><u>Beef Burgers</u></h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Plain Beef Burger</span>
              <span>$16.90</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Micro Beeg Burger</span>
              <span>$14.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Spicy Beef Burger</span>
              <span>$16.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>BBQ Beef Burger</span>
              <span>$15.00</span>
            </div>
          </div>
        </div>

        {/* Center Half of Menu */}
        <div style={{ flex: 1, textAlign: 'left', padding: '0 40px', marginTop: '2%' }}>
          {/* Chicken Burgers */}
          <h2><u>Chicken Burgers</u></h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Crunchy Chicken Burger</span>
              <span>$16.90</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>BBQ Chicken Burger</span>
              <span>$14.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Spicy Chicken Burger</span>
              <span>$16.50</span>
            </div>
          </div>
          <br />
          {/* Sides */}
          <h2><u>Sides</u></h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Large Chips + 1.1L Drink</span>
              <span>$9.99</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Small Chips</span>
              <span>$3.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Large Chips</span>
              <span>$5.99</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>1.1L Drink</span>
              <span>$6.00</span>
            </div>
          </div>
        </div>

        {/* Images */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <img
            src="/images/burger1.jpg"
            alt="Chicken Burger"
            className="wiggle"
            style={{
              maxWidth: '200px',
              height: '261px',
              borderRadius: '20px',
              marginBottom: '20px',
              marginRight: '20px'
            }}
          />
          <img
            src="/images/burger2.jpg"
            alt="BBQ Burger"
            className="wiggle"
            style={{
              maxWidth: '300px',
              height: '261px',
              borderRadius: '20px',
              marginBottom: '20px',
              marginRight: '20px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
