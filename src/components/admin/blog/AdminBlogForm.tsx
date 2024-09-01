import type { FC } from 'react';

interface AdminBlogFormProps { }

const AdminBlogForm: FC<AdminBlogFormProps> = ({ }) => {
  return (
    <form>
      <div>
        <div>
          <button>Preview</button>
        </div>
        <div>
          <button>Action</button>
          <button>Action</button>
        </div>
      </div>
      <div>
        Fields
      </div>
    </form>
  );
}

export default AdminBlogForm;