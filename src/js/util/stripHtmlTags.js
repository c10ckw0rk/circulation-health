export default function stripHtmlTags(str) {
	if (!str) return '';
	else str = str.toString();
	return str.replace(/<[^>]*>/g, '');
}
