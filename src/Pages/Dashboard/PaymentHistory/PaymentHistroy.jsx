import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="p-4 min-h-screen text-base-content">
            {/* Page Heading */}
            <div className="text-center -my-16">
                <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"} />
            </div>

            {/* Card Container */}
            <div className="bg-base-100 rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">
                    Total Payments: {payments.length}
                </h2>

                {/* Table */}
                <div>
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-[#D1A054] text-white rounded-t-xl">
                                <th className="rounded-tl-xl">#</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Transaction ID</th>
                                <th className="rounded-tr-xl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment._id} className="hover:bg-gray-800 transition duration-200">
                                    <td>{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td>${payment.price}</td>
                                    <td className="text-xs">{payment.transactionId}</td>
                                    <td>
                                        {new Date(payment.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
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

export default PaymentHistory;
