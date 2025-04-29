import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import 'animate.css';

function App() {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('/');
  
  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location]);

  const [products] = useState([
    {
      id: 1,
      name: 'Papan Bunga Printing',
      type: 'Printing',
      description: 'Papan bunga ucapan dengan berbagai pilihan warna yang elegan dan lebih tahan lama',
      image: 'img/printing.jpg'
    },
    {
      id: 2,
      name: 'Bunga Standing Grand',
      type: 'Standing Bucket',
      description: 'Karangan bunga standing mewah untuk acara spesial seperti pernikahan dan ulang tahun atau anniversary',
      image: '/img/bucket.jpg'
    },
    {
      id: 3,
      name: 'Papan Bunga Exclusive',
      type: 'Gabus',
      description: 'Papan Bunga exclusive untuk ucapan selamat, duka cita, dan acara resmi lainnya',
      image: '/img/gabus3.jpg'
    },
    {
      id: 4,
      name: 'Papan Bunga Reguler',
      type: 'Gabus',
      description: 'Papan Bunga reguler. (Harga dapat disesuaikan dengan desain)',
      image: '/img/gabus.jpg'
    },
    {
      id: 5,
      name: 'Bunga Standing Grand',
      type: 'Standing Bucket',
      description: 'Karangan bunga standing, sangat tepat untuk acara spesial. (Harga dapat disesuaikan dengan desain)',
      image: '/img/bucket3.jpg'
    }
  ]);

  const testimonials = [
    {
      id: 1,
      name: 'Putri Wijaya',
      comment: 'Karangan bunga dari CC Florist selalu bagus. Pelayanannya juga sangat memuaskan!',
      rating: 5
    },
    {
      id: 2,
      name: 'Dean Saputra',
      comment: 'Untuk acara perusahaan kami selalu memesan dari CC Florist. Kualitas konsisten dan tepat waktu.',
      rating: 5
    },
    {
      id: 3,
      name: 'Hana',
      comment: 'Karangan bunga anniversary saya sangat bagus! Terima kasih CC Florist!',
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-warning" : "text-secondary"}>★</span>
    ));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar with Animation */}
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm animate__animated animate__fadeInDown">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-success fs-3">
            <span className="text-primary">CC</span> Florist
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={activeKey}>
              <Nav.Link as={Link} to="/" className="mx-2 fw-medium">Home</Nav.Link>
              <Nav.Link as={Link} to="/produk" className="mx-2 fw-medium">Produk</Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-2 fw-medium">Tentang Kami</Nav.Link>
              <Nav.Link as={Link} to="/kontak" className="mx-2 fw-medium">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with padding for fixed navbar */}
      <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="py-5 bg-light">
                <Container className="py-5">
                  <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0 animate__animated animate__fadeInLeft">
                      <h1 className="display-4 fw-bold mb-4">
                        Karangan Bunga <span className="text-primary">Eksklusif</span> untuk Setiap Momen Spesial
                      </h1>
                      <p className="lead mb-4">
                        CC Florist menyediakan rangkaian bunga terbaik dengan kualitas premium untuk berbagai acara dan kebutuhan.
                      </p>
                      <div className="d-flex gap-3">
                        <Button as={Link} to="/produk" variant="primary" size="lg" className="animate__animated animate__pulse animate__infinite">
                          Lihat Produk
                        </Button>
                        <Button as={Link} to="/kontak" variant="outline-primary" size="lg">
                          Hubungi Kami
                        </Button>
                      </div>
                    </Col>
                    <Col lg={6} className="animate__animated animate__fadeInRight">
                      <img 
                        src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Hero" 
                        className="img-fluid rounded shadow" 
                      />
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Featured Products */}
              <section className="py-5">
                <Container>
                  <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeInUp">Produk Unggulan Kami</h2>
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {products.slice(0, 3).map((product, index) => (
                      <Col key={product.id} className={`animate__animated animate__fadeInUp animate__delay-${index+1}s`}>
                        <Card className="h-100 shadow-sm border-0 overflow-hidden product-card">
                          <div className="overflow-hidden">
                            <Card.Img 
                              variant="top" 
                              src={product.image} 
                              alt={product.name}
                              className="img-fluid product-image"
                            />
                          </div>
                          <Card.Body>
                            <Card.Title className="fw-bold">{product.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.type}</Card.Subtitle>
                            <Card.Text>{product.description}</Card.Text>
                            <Button as={Link} to="/produk" variant="outline-primary" className="mt-auto">
                              Lihat Detail
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-center mt-5">
                    <Button as={Link} to="/produk" variant="primary" size="lg">
                      Lihat Semua Produk
                    </Button>
                  </div>
                </Container>
              </section>

              {/* Testimonials */}
              <section className="py-5 bg-light">
                <Container>
                  <h2 className="text-center mb-5 fw-bold">Apa Kata Pelanggan Kami</h2>
                  <Row className="g-4">
                    {testimonials.map((testimonial, index) => (
                      <Col md={4} key={testimonial.id} className={`animate__animated animate__fadeInUp animate__delay-${index+1}s`}>
                        <Card className="h-100 shadow-sm">
                          <Card.Body className="text-center">
                            <div className="mb-3">
                              {renderStars(testimonial.rating)}
                            </div>
                            <Card.Text className="fst-italic mb-4">
                              "{testimonial.comment}"
                            </Card.Text>
                            <Card.Text className="fw-bold">
                              {testimonial.name}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>

              {/* Call to Action */}
              <section className="py-5 bg-primary text-white">
                <Container className="text-center py-5">
                  <h2 className="display-5 fw-bold mb-4">Siap Memesan Karangan Bunga?</h2>
                  <p className="lead mb-5">
                    Hubungi kami sekarang untuk konsultasi gratis dan pemesanan karangan bunga eksklusif Anda.
                  </p>
                  <Button as={Link} to="/kontak" variant="light" size="lg" className="me-3">
                    Hubungi Kami
                  </Button>
                  <Button as={Link} to="/produk" variant="outline-light" size="lg">
                    Lihat Katalog
                  </Button>
                </Container>
              </section>
            </>
          } />
          
          <Route path="/produk" element={
            <Container className="py-5">
              <h1 className="text-center mb-5 fw-bold">Koleksi Produk Kami</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((product, index) => (
                  <Col key={product.id} className={`animate__animated animate__fadeInUp animate__delay-${index % 3}s`}>
                    <Card className="h-100 shadow-sm border-0 overflow-hidden product-card">
                      <div className="overflow-hidden">
                        <Card.Img 
                          variant="top" 
                          src={product.image} 
                          alt={product.name}
                          className="img-fluid product-image"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.type}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="outline-primary" className="mt-auto" onClick={() => window.location.href = 'https://wa.me/6281333626988'}>
                          Pesan via WhatsApp
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          } />
          
          <Route path="/about" element={
            <Container className="py-5">
              <Row className="align-items-center">
                <Col lg={6} className="mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">Tentang CC Florist</h1>
                  <p className="lead">
                    CC Florist telah menjadi pilihan untuk karangan bunga di Surabaya sejak 2010.
                  </p>
                  <p>
                    Kami mengkhususkan diri dalam menyediakan karangan bunga dengan kualitas terbaik untuk berbagai acara dan kebutuhan. 
                    Setiap karangan bunga dibuat dengan penuh perhatian dan kreativitas oleh tim florist profesional kami.
                  </p>
                  <p className="fw-bold mt-4">
                    Menerima pesanan karangan bunga untuk seluruh lokasi Surabaya dan sekitarnya.
                  </p>
                  
                  <div className="mt-5">
                    <h4 className="mb-4">Layanan Kami:</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Karangan & Papan bunga untuk ucapan selamat</li>
                      <li className="mb-2">✓ Karangan & Papan bunga untuk duka cita</li>
                      <li className="mb-2">✓ Karangan & Papan bunga untuk pernikahan</li>
                      <li className="mb-2">✓ karangan & Papan Bunga untuk acara perusahaan</li>
                    </ul>
                  </div>
                </Col>
               
              </Row>
              
              <Row className="mt-5">
                <Col>
                  <div className="bg-light p-5 rounded text-center">
                    <h3 className="mb-4">Visi Kami</h3>
                    <p className="lead">
                      "Menjadi florist terdepan di Surabaya dengan memberikan pengalaman terbaik dalam setiap karangan bunga yang kami buat."
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          } />
          
          <Route path="/kontak" element={
            <Container className="py-5">
              <Row>
                <Col lg={6} className="mb-5 mb-lg-0">
                  <h1 className="display-5 fw-bold mb-4">Hubungi Kami</h1>
                  <p className="lead mb-5">
                    Silakan hubungi kami melalui salah satu cara berikut.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="mb-3">
                      <FaWhatsapp className="text-success me-2" />
                      WhatsApp (Chat & Call)
                    </h4>
                    <a href="https://wa.me/6281333626988" className="fs-5 text-decoration-none">
                      0813-3362-6988
                    </a>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-3">
                      <FaInstagram className="text-danger me-2" />
                      Instagram
                    </h4>
                    <a href="https://www.instagram.com/ccflorist1/" target="_blank" rel="noopener noreferrer" className="fs-5 text-decoration-none">
                      @ccflorist1
                    </a>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-3">
                      <FaEnvelope className="text-primary me-2" />
                      Email
                    </h4>
                    <a href="mailto:ccflorist1@gmail.com" className="fs-5 text-decoration-none">
                      ccflorist1@gmail.com
                    </a>
                  </div>
                                    
                  <div>
                    <h4 className="mb-3">
                      <FaMapMarkerAlt className="text-danger me-2" />
                      Alamat
                    </h4>
                    <p className="fs-5">
                      Surabaya, Jawa Timur
                    </p>
                  </div>
                </Col>
                
              </Row>
              
              <Row className="mt-5">
                <Col>
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.25738903271!2d112.68291069999999!3d-7.2574719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1716970000000!5m2!1sen!2sid" 
                      allowFullScreen="" 
                      loading="lazy"
                      className="rounded shadow"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Container>
          } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="text-primary">CC Florist</h5>
              <p>
                Penyedia karangan bunga di Surabaya dengan kualitas terbaik dan pelayanan memuaskan.
              </p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h5>Jam Operasional</h5>
              <ul className="list-unstyled">
                <li>Melayani Setiap Hari</li>
                
              </ul>
            </Col>
            <Col md={4}>
              <h5>Media Sosial</h5>
              <div className="d-flex gap-3">
                <a href="https://www.instagram.com/ccflorist1/" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/6281333626988" className="text-white fs-4">
                  <FaWhatsapp />
                </a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Matthew Vincentius. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;