import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Input, Stack, IconButton, Flex, Badge } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMDk1MjU1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another sample product",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcxMDk1MjU1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products...
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box>
      <Flex align="center" justify="space-between" p={4} bg="gray.100">
        <Heading size="xl">Marketplace</Heading>
        <Stack direction="row" spacing={4}>
          <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" variant="outline" />
          <Badge variant="solid" colorScheme="green">
            {cart.length}
          </Badge>
        </Stack>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading size="md">{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text fontWeight="bold" mt={2}>
              ${product.price}
            </Text>
            <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          Cart
        </Heading>
        {cart.map((item) => (
          <Flex key={item.id} align="center" justify="space-between" borderBottomWidth={1} py={2}>
            <Text>{item.name}</Text>
            <IconButton icon={<FaSearch />} aria-label="Remove" onClick={() => removeFromCart(item.id)} />
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
