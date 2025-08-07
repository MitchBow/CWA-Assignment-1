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
          <p>
            Hot Honey Chicken Burger - $19.99<br />
            Hot Honey Chicken Bites - $18.00<br />
          </p>
          <br />
          {/* Burgers */}
          <h2><u>Beef Burgers</u></h2>
          <p>
            Plain Beef Burger - $16.90<br />
            Micro Beeg Burger - $14.50<br />
            Spicy Beef Burger - $16.50 <br />
            BBQ Beef Burger - $15.00<br />
          </p>
        </div>

        {/* Center Half of Menu */}
        <div style={{ flex: 1, textAlign: 'left', padding: '0 40px', marginTop: '2%' }}>
          {/* Kebab */}
          <h2><u>Chicken Burger</u></h2>
          <p>
            Crunchy Chicken Burger - $16.90<br />
            BBQ Chicken Burger - $14.50<br />
            Spicey Chicken Burger - $16.50<br />
          </p>
          <br />
          {/* Sides */}
          <h2><u>Sides</u></h2>
          <p>
            large Chips + 1.1L drink - $9.99<br />
            Small Chips - $3.50<br />
            Large Chips -  $5.99<br />
            1.1L Drink - $6.00<br />
          </p>
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
