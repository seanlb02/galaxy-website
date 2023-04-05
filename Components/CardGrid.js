import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup className="font-gudea lg:p-12 mx-2 xs:p-10 pt-0 lg:mb-5 mb-0 gap-4">
      <Card className="shadow" >
        <Card.Img variant="top" alt="house for sale sign" src="/openhouse.jpg" height="160px" width="100px"/>
        <Card.Body>
          <Card.Title>Declutter to sell</Card.Title>
          <Card.Text>
            We specialise in short-term relocation/storage packages for people prepparing to sell. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <a href='/pricing#contact'><button>Learn More</button></a>
        </Card.Footer>
      </Card>
      <Card className="shadow">
      <Card.Img variant="top" alt="truck driving on open road" src="/road.jpg" height="160px" width="100px"/>
        <Card.Body>
          <Card.Title>Interstate relocation</Card.Title>
          <Card.Text>
            We offer regional and inter-state relocation services with the ability to achieve next day delivery in many cases.
            What's more, the team that packs your items will be there for delivery.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href='/pricing#contact'><button>Learn More</button></a>
        </Card.Footer>
      </Card>
      <Card className="shadow">
        {/* <div className="h-96 w-full"> */}
        <Card.Img variant="top" alt="packer" src="/packer.jpg" height="160px" width="100px" />
        {/* </div> */}
        <Card.Body>
          <Card.Title>Packing Combos</Card.Title>
          <Card.Text>
            We offer pack and move solutions for those juggling the move with work and family life. All materials provided.
          </Card.Text>
        </Card.Body>
        <Card.Footer id="services">
        <a href='/pricing#contact'><button>Learn More</button></a>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;