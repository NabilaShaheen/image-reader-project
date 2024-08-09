"use client";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="mt-4">
      <label htmlFor="language" className="mr-2">Select Language:</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-2 py-1 border rounded w-full sm:w-auto"
      >
        <option value="eng">English</option>
        <option value="spa">Spanish</option>
        <option value="fra">French</option>
        <option value="deu">German</option>
        <option value="chi_sim">Chinese (Simplified)</option>
        <option value="ara">Arabic</option>
        <option value="rus">Russian</option>
        <option value="urd">Urdu</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
