"use client";

import { useEffect, useState } from "react";

export default function HospitalVisitsTable() {
    const [visits, setVisits] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchVisits(page);
    }, [page]);

    const fetchVisits = async (page: number) => {
        const res = await fetch(`/api/hospital-visits?page=${page}`);
        const data = await res.json();

        if (res.ok) {
            setVisits(data.visits);
            setTotalPages(Math.ceil(data.totalRecords / 20));
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Hospital Visits</h2>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Department</th>
                    <th className="border border-gray-300 p-2">Amount</th>
                    <th className="border border-gray-300 p-2">Date</th>
                    <th className="border border-gray-300 p-2">Status</th>
                </tr>
                </thead>
                <tbody>
                {visits.map((visit, index) => (
                    <tr key={index} className="text-center">
                        <td className="border border-gray-300 p-2">{visit.name}</td>
                        <td className="border border-gray-300 p-2">{visit.department}</td>
                        <td className="border border-gray-300 p-2">{visit.amount}</td>
                        <td className="border border-gray-300 p-2">{new Date(visit.date).toLocaleDateString()}</td>
                        <td className="border border-gray-300 p-2">{visit.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="px-3 py-1">{page} / {totalPages}</span>
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
