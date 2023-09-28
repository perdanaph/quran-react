import axios from 'axios';

const getAllSurah = async () => {
  try {
    const response = await axios.get(`https://api.quran.gading.dev/surah`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

const getSurahById = async id => {
  try {
    const response = await axios.get(`https://api.quran.gading.dev/surah/${id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export { getAllSurah, getSurahById };
