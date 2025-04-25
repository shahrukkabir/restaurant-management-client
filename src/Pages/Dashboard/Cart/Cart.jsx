import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    console.log(cart);
    

    const handleDelete = (id) => {
        console.log(id);
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6c757d",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/carts/${id}`).then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Item has been deleted.", "success");
                        }
                    });
                }
            });
    };

    return (
        <div className="p-4 min-h-screen text-base-content">
            <div className="text-center -mt-16">
                <SectionTitle subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"}></SectionTitle>
            </div>

            <div className="bg-base-100 rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 className="text-xl font-semibold">Total Orders: {cart.length}</h2>
                    <h2 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
                    <button className="btn btn-primary">PAY</button>
                </div>

                <div>
                    <table className="table w-full">
                        <thead className="bg-[#D1A054] text-base-content">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-800 transition duration-200">
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error btn-sm text-white" >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
