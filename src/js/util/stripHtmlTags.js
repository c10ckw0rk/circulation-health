export default function stripHtmlTags(str) {
	if (!str) return false;
	else str = str.toString();
	return str.replace(/<[^>]*>/g, '');
}
