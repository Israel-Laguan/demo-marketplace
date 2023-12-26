'use client'
import { useState } from 'react';
import { Product } from '@/prisma/models';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Checkbox } from '@nextui-org/checkbox';
import Link from 'next/link';

const AdminProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='inline-block'>
      <Link href="/admin/add">
        <Button color='primary' className="mb-4">
          Add New Product
        </Button>
      </Link>
      <Table>
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Quantity</TableColumn>
          <TableColumn>Discount</TableColumn>
          <TableColumn>Images</TableColumn>
          <TableColumn>Is Hidden</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.discount?.toFixed(2)}%</TableCell>
              <TableCell>{product.images.length}</TableCell>
              <TableCell>
                <Checkbox
                  checked={product.isHidden}
                  disabled
                />
              </TableCell>
              <TableCell>
                <Link href={`/admin/edit/${product.id}`}>
                  <Button color="secondary">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div>
        <p>Page {currentPage} of {totalPages}</p>
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AdminProductList;