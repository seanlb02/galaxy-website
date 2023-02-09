import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup className="p-12 pt-0 gap-2">
      <Card className="shadow">
        <Card.Img variant="top" src="/road.jpg" height="160px" width="100px"/>
        <Card.Body>
          <Card.Title>Declutter to sell</Card.Title>
          <Card.Text>
            We specialise in short-term relocation/storage packages for people prepparing to sell. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button>Learn More</button>
        </Card.Footer>
      </Card>
      <Card className="shadow">
      <Card.Img variant="top" src="/road.jpg" height="160px" width="100px"/>
        <Card.Body>
          <Card.Title>Interstate relocation</Card.Title>
          <Card.Text>
            We offer regional and inter-state relocation services with the ability to achieve next day delivery in many cases.
            What's more, the team that packs your items will be there for delivery.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button>Learn More</button>
        </Card.Footer>
      </Card>
      <Card className="shadow">
        <div className="h-96 w-full">
        <Card.Img variant="top" src="/packer.jpg" height="160px" width="100px" />
        </div>
        <Card.Body>
          <Card.Title>Packing Combos</Card.Title>
          <Card.Text>
            We offer pack and move solutions for those juggling the move with work and family life. All materials provided.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button className="text-blue-500">Learn More</button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;