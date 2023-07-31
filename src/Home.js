import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for pagination
  const itemsPerPage = 3; // Number of users to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Get the users for the current page
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleDelete = (userId) => {
    dispatch(deleteUser({ id: userId }));
    navigate('/');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    // State for the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search query change
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1); // Reset current page when search query changes
    };
  
    // Filter users based on the search query
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className='container mt-5'>
      <h2>Crud App with Redux</h2>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search by name...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Link to='/create' className='btn btn-success my-2 btn-sm'>
        Create
      </Link>

      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>
                    Edit
                  </Link>
                  <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <nav aria-label='Page navigation'>
        <ul className='pagination'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className='page-link' onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
