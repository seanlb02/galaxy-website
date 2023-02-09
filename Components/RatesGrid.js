import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function RatesGrid() {
  return (
    <CardGroup className="p-12 gap-3">
      <Card className="shadow">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Two Removalists with Truck</Card.Title>
          <Card.Text>
            We tend to only take out two removalists for small relocation or storage jobs. 
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.cardFooter}>
            <div>$120 per hour</div>
        <button><a href="/pricing#contact"><strong>Book Now</strong></a></button>
        </Card.Footer>
      </Card>
      <Card className="shadow">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Three Removalists with Truck <em>(Reccomended)</em></Card.Title>
          <Card.Text>
            Adding just one extra removalist doubles the speed of the vast majority of jobs, meaning you get settled in sooner without paying double.
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.cardFooter}>
            <div>$160 per hour</div>
        <button><a href="/pricing#contact"><strong>Book Now</strong></a></button>
        </Card.Footer>
      </Card>
      <Card className="shadow">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Four removalists and a truck</Card.Title>
          <Card.Text>
            For large or time critical residential and commercial jobs we take 4 removalists 
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.cardFooter}>
            <div>$200 per hour</div>
        <button><a href="/pricing#contact"><strong>Book Now</strong></a></button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

const styles = {
    cardFooter: "flex gap-12 w-full"
}

export default RatesGrid;