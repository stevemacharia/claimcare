"use client";

import { useState } from "react";

export default function HospitalVisitModal({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        department: "In-patient",
        amount: "",
        date: "",
        status: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        console.log("Submitting form data:", formData); // 👈 Add this line

        try {
            const res = await fetch("/api/hospital-visits", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                setMessage("Visit added successfully!");
                setFormData({ name: "", department: "In-patient", amount: "", date: "", status: "" });

                setTimeout(() => {
                    setIsOpen(false);
                    setMessage("");
                    window.location.reload(); // ✅ this reloads the entire page
                }, 2000);
            } else {
                setMessage("Failed to add visit. Please try again.");
            }
        } catch (error) {
            console.error("Submit error:", error);
            setMessage("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Add Hospital Visit
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Add Hospital Visit</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Patient Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-2"
                                required
                            />

                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-2"
                            >
                                <option value="Inpatient">In-patient</option>
                                <option value="Outpatient">Out-patient</option>
                                <option value="A&E">A&E</option>
                            </select>

                            <input
                                type="number"
                                name="amount"
                                placeholder="Amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-2"
                                required
                            />

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-2"
                                required
                            />

                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-2"
                                required
                            />

                            {message && <p className="text-center text-sm mt-2">{message}</p>}

                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    disabled={loading}
                                >
                                    {loading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
