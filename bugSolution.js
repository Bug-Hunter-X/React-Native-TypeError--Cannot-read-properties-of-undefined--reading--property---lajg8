```javascript
// Correct - handles null/undefined gracefully
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'Loading...'}</Text> {/* Safe access */}
    </View>
  );
};
```

The `user?.name` uses optional chaining. If `user` is null or undefined, it short-circuits and returns undefined. Then, the nullish coalescing operator (`??`) provides a default value ('Loading...') if `user?.name` is null or undefined.