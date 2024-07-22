import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import TodoList from '../../components/TodoList/TodoList.jsx';
import PageLayout from '../../components/PageLayout/PageLayout.jsx';

export function TodoListPage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div>
           <h1>My - To - Do - List </h1>
           <TodoList />
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
