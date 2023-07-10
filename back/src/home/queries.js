const get_user_wl = "select metadata ->> 'label' as label, count(*) from scan_data where metadata ->> 'id'::TEXT = $1 AND created_at created_at >= $2 GROUP BY  metadata ->> 'label', metadata ->> 'id'";
const total_workload = "select count(*) from scan_data where metadata ->> 'id'::TEXT = $1 GROUP BY metadata ->> 'id'";
const get_image_list = "select files ->> 'rgb'::TEXT from scan_data where metadata ->> 'id'::TEXT = $1 and metadata ->> 'label'::TEXT = $2 ORDER BY created_at DESC;"
const get_month_list = "select metadata ->> 'label' as label, count(*) from scan_data where metadata ->> 'id'::TEXT = $1 AND created_at BETWEEN $2 AND $3 GROUP BY metadata ->> 'label'";
module.exports = {
    get_user_wl,
    total_workload,
    get_image_list,
    get_month_list,
};