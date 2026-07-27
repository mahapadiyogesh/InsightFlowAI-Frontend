import UploadSection from "../components/UploadSection";

function UploadPage() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Upload Dataset
        </h1>

        <p className="text-slate-500 mt-2">
          Upload Excel or CSV files and let AI generate your dashboard.
        </p>

      </div>

      <UploadSection />

    </div>
  );
}

export default UploadPage;