import {Card,Button} from 'react-bootstrap'




function MovieCard({movie}){
    return(
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Card.Text>{"⭐".repeat(movie.rating)}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>


        
    )
}

export default MovieCard