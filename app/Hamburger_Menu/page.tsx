export default function HamburgerMenuPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Left Side: Menu Text */}
      <div style={{ flex: 1, marginRight: '150px' }}>
        <h1>Food Menu</h1>

        {/* Specials */}
        <h2><u>Specials</u></h2>
        <p>
          $19.99 - hot honey chicken burger<br />
          $19.99 - hot honey chicken bites<br />
        </p>
        <br />
        {/* Burgers */}
        <h2><u>Burgers</u></h2>
        <p>
          $16.90 - crunchy chicken burger<br />
          $14.50 - micro chicken burger<br />
          $16.50 - spicy beef burger<br />
          $15.00 - BBQ beef burger<br />
        </p>
        <br />
        {/* Kebab */}
        <h2><u>Kebab</u></h2>
        <p>
          $16.90 - crunchy chicken kebab<br />
          $14.50 - BBQ beef kebab<br />
          $16.50 - Mixed kebab<br />
        </p>
        <br />
        {/* Sides */}
        <h2><u>Sides</u></h2>
        <p>
          $9.99 - large Chips + 1.1L drink<br />
          $3.50 - Small chips<br />
          $5.99 - Large chips<br />
          $6.00 - 1.1L drink<br />
        </p>
      </div>
      <br />

      {/* Images */}
      <div>      
        <img 
          src="/images/burger1.jpg" 
          alt="Chicken Burger" 
          style={{ maxWidth: '500px', height: '400px', borderRadius: '20px', marginRight: '20px', marginBottom: '20px' }} 
        />
        <img 
          src="/images/burger2.jpg" 
          alt="BBQ Burger" 
          style={{ maxWidth: '500px', height: '400px', borderRadius: '20px', marginRight: '20px', marginBottom: '20px' }} 
        />
      </div>
    </div>
  );
}
